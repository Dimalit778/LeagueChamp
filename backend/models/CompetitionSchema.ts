import Realm, { ObjectSchema } from 'realm';
import { Crawler } from './Crawler'; // Assuming you have a similar module in TS

class Competition extends Realm.Object {
  id!: number;
  type!: string;
  name!: string;
  last_registration!: string | null;
  start_time!: string | null;
  config!: { [key: string]: any };
  created_at!: Date | null;
  updated_at!: Date | null;
  games!: Realm.List<Game>;
  groups!: Realm.List<Group>;
  players!: Realm.List<Player>;
  teams!: Realm.List<Team>;
  tournaments!: Realm.List<Tournament>;

  static STATUS_DONE = 'done';
  static STATUS_ONGOING = 'ongoing';
  static STATUS_INITIAL = 'initial';

  static TYPE_WC = 'WC';
  static TYPE_UCL = 'UCL';

  sortedGames?: Realm.Results<Game>;
  endingGroupGameIds?: number[];
  lastGroupStageGameId?: number;

  static schema: ObjectSchema = {
    name: 'Competition',
    primaryKey: 'id',
    properties: {
      id: 'int',
      type: 'string',
      name: 'string',
      last_registration: 'string?',
      start_time: 'string?',
      config: 'string', // Store JSON as string and parse when needed
      created_at: 'date?',
      updated_at: 'date?',
      games: 'Game[]',
      groups: 'Group[]',
      players: 'Player[]',
      teams: 'Team[]',
      tournaments: 'Tournament[]',
    },
  };

  isClubsCompetition(): boolean {
    const config = JSON.parse(this.config);
    return config['isForClubs'] || false;
  }

  getCompetitionType(): string | false {
    const config = JSON.parse(this.config);
    return config['type'] || false;
  }

  getGamesToFixScorers(): Realm.List<Game> {
    const config = JSON.parse(this.config);
    const fromConf = config['games_to_fix_scores'];
    if (fromConf) {
      return new Realm.List(JSON.parse(fromConf));
    }
    return new Realm.List();
  }

  get365Id(): string | undefined {
    const config = JSON.parse(this.config);
    return config['id_on_365'];
  }

  isSupports365TeamExtId(): boolean {
    const config = JSON.parse(this.config);
    return !(config['ignore365TeamExtId'] || false);
  }

  getCrawler(): Crawler {
    const config = JSON.parse(this.config);
    return Crawler.getInstance(config['external_id']);
  }

  getGamesSorted(): Realm.Results<Game> {
    if (!this.sortedGames) {
      this.sortedGames = this.games.sorted([
        ['start_time', true],
        ['done_time', true],
        ['id', true],
      ]);
    }
    return this.sortedGames;
  }

  getSortedGameIds(): number[] {
    return this.getGamesSorted().map((game) => game.id);
  }

  shouldUpdateUpcomingGamesStartTime(): boolean {
    const config = JSON.parse(this.config);
    return config['update_upcoming_games_start_time'] || false;
  }

  resetShouldUpdateUpcomingGamesStartTime(): void {
    const config = JSON.parse(this.config);
    delete config['update_upcoming_games_start_time'];
    this.config = JSON.stringify(config);
  }

  getIdsOfLastGroupGames(): number[] {
    if (!this.endingGroupGameIds) {
      this.endingGroupGameIds = [];
      this.groups.forEach((group) => {
        const lastGame = this.getGamesSorted()
          .filtered(
            (game) =>
              game.type === Game.TYPE_GROUP_STAGE &&
              game.sub_type === group.external_id
          )
          .slice(-1)[0];
        if (lastGame) {
          this.endingGroupGameIds.push(lastGame.id);
        }
      });
    }
    return this.endingGroupGameIds;
  }

  getLastGroupStageGameId(): number | undefined {
    if (!this.lastGroupStageGameId) {
      const lastGame = this.getGamesSorted()
        .filtered((game) => game.type === Game.TYPE_GROUP_STAGE)
        .slice(-1)[0];
      if (lastGame) {
        this.lastGroupStageGameId = lastGame.id;
      }
    }
    return this.lastGroupStageGameId;
  }

  getFinalGame(): Game | undefined {
    return this.games.filtered(
      (game) => game.type === 'knockout' && game.sub_type === 'FINAL'
    )[0];
  }

  getKnockoutGames(teamId?: number): Realm.Results<Game> {
    const games = this.games.filtered((game) => game.type === 'knockout');
    if (teamId) {
      return games.filtered(
        (game) => game.team_home_id === teamId || game.team_away_id === teamId
      );
    }
    return games;
  }

  isDone(): boolean {
    const final = this.getFinalGame();
    return final && final.is_done;
  }

  hasAllGroupsStandings(): boolean {
    return (
      this.groups.filtered((group) => group.standings === null).length === 0
    );
  }

  isGroupStageDone(): boolean {
    return this.getGroupStageGamesIfStageDone() !== null;
  }

  getGroupStageGamesIfStageDone(): Realm.List<Game> | null {
    const games = this.getGroupStageGames();
    const unfinishedGame = games.find((game) => !game.is_done);
    if (unfinishedGame) {
      return null;
    }
    return games;
  }

  getGroupStageGames(): Realm.Results<Game> {
    return this.games.filtered((game) => game.type === Game.TYPE_GROUP_STAGE);
  }

  getTournamentStartTime(): Date | null {
    const times = this.games.map((game) => game.start_time);
    return times.length > 0 ? new Date(Math.min(...times)) : null;
  }

  areBetsOpen(): boolean {
    const startTime = this.getTournamentStartTime();
    if (!startTime) return false;
    const lockBeforeSecs = 60 * 60 * 24; // Example: 1 day before tournament start
    return startTime.getTime() - lockBeforeSecs * 1000 > Date.now();
  }

  isStarted(): boolean {
    const startTime = this.getTournamentStartTime();
    return startTime ? Date.now() > startTime.getTime() : false;
  }

  getOffensiveTeams(): Realm.List<number> {
    const matches = this.getGroupStageGamesIfStageDone();
    if (!matches) return new Realm.List();

    const goalsByTeamId: { [key: number]: number } = {};
    matches.forEach((match) => {
      match.getGoalsData().forEach((goals, teamId) => {
        if (!goalsByTeamId[teamId]) {
          goalsByTeamId[teamId] = 0;
        }
        goalsByTeamId[teamId] += goals;
      });
    });

    const maxGoals = Math.max(...Object.values(goalsByTeamId));
    return new Realm.List(
      Object.keys(goalsByTeamId)
        .filter((teamId) => goalsByTeamId[teamId] === maxGoals)
        .map(Number)
    );
  }

  getTopScorersIds(live = false): Realm.List<number> {
    if (!this.isDone() && !live) return new Realm.List();

    const maxGoals = Math.max(
      ...this.players.map((player) => player.goals ?? -1)
    );
    return new Realm.List(
      this.players
        .filter((player) => player.goals === maxGoals)
        .map((player) => player.id)
    );
  }

  getMostAssistsIds(live = false): Realm.List<number> {
    if (!this.isDone() && !live) return new Realm.List();

    const maxAssists = Math.max(
      ...this.players.map((player) => player.assists ?? -1)
    );
    return new Realm.List(
      this.players
        .filter((player) => player.assists === maxAssists)
        .map((player) => player.id)
    );
  }

  start(): void {
    this.tournaments.forEach((tournament) => tournament.start());
    this.status = Competition.STATUS_ONGOING;
  }
}

export default Competition;
