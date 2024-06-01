import { Realm } from 'realm';

export class User extends Realm.Object {
  static schema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
      id: 'int',
      name: 'string',
      username: 'string',
      password: 'string',
      permissions: 'int',
      remember_token: 'string?',
      created_at: 'date?',
      updated_at: 'date?',
      fcm_token: 'string?',
    },
  };

  static TYPE_ADMIN = 2;
  static TYPE_TOURNAMENT_ADMIN = 1;
  static TYPE_USER = 0;
  static TYPE_MONKEY = -1;

//   isAdmin() {
//     return this.permissions == User.TYPE_ADMIN;
//   }

//   isTournamentAdmin() {
//     return this.permissions == User.TYPE_TOURNAMENT_ADMIN;
//   }

//   hasTournamentAdminPermissions() {
//     return this.permissions >= User.TYPE_TOURNAMENT_ADMIN;
//   }

  isConfirmed(tournamentId: number) {
    const utl = this.getTournamentUser(tournamentId);
    if (!utl) return false;
    return utl.isConfirmed();
  }

  isMonkey() {
    return this.permissions == User.TYPE_MONKEY;
  }

  tournaments = this.belongsToMany(Tournament, TournamentUser, 'user_id', 'tournament_id');
  ownedTournaments = this.hasMany(Tournament, 'creator_user_id');
  utls = this.hasMany(TournamentUser);

  registeredUtls() {
    return this.utls.filter((utl) => utl.isRegistered());
  }

  canJoinAnotherTournament(competitionId: number) {
    const MAX_TOURNAMENTS_PER_USER_LIMIT = 3;
    const participatingTournamentsCount = this.registeredUtls()
      .filter((utl) => utl.tournament.competition.id == competitionId)
      .count();
    return participatingTournamentsCount < MAX_TOURNAMENTS_PER_USER_LIMIT;
  }

  wasAnActiveUser() {
    for (const utl of this.utls) {
      if (utl.wasAnActiveUser()) {
        return true;
      }
    }
    return false;
  }

  getGroupBetsById() {
    const groups = Group.all();
    const bets = Bet.query()
      .where('type', BetTypes.GroupsRank)
      .where('user_id', this.id)
      .findAll();
    const output = {};
    for (const group of groups) {
      group.bet = bets.find((bet) => bet.type_id == group.id);
      group.teamsById = group.teams.keyBy('id');
      output[group.id] = group;
    }
    return output;
  }

  getTournamentUser(tournamentId: number): TournamentUser | null {
    return this.utls.find((utl) => utl.tournament_id == tournamentId);
  }

 
  static getIdToNameMap() {
    return this.all().groupBy('id').map((u)