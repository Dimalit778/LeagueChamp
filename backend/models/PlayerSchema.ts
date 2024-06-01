import { BelongsTo, HasMany, Model } from 'sequelize-typescript';
import { Team } from './Team';
import { GameDataGoal } from './GameDataGoal';

export class Player extends Model {
  public id!: number;
  public externalId!: string;
  public name!: string;
  public teamId!: number;
  public shirt!: number | null;
  public position!: string | null;
  public goals!: number;
  public assists!: number;
  public createdAt!: Date | null;
  public updatedAt!: Date | null;

  public team!: BelongsTo<Player, Team>;
  public goalsData!: HasMany<Player, GameDataGoal>;

  public static generate(
    team: Team,
    playerData: App.DataCrawler.Player
  ): Player {
    const player = new Player();
    player.externalId = playerData.externalId;
    player.name = playerData.name;
    player.teamId = team.id;
    player.shirt = playerData.shirt;
    player.goals = 0;
    player.assists = 0;
    player.save();

    return player;
  }
}
