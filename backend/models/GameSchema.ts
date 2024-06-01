import { Model } from 'laravel-nova'
import { BetableInterface } from './BetableInterface'
import { BetMatchRequest } from './BetMatchRequest'
import { BetTypes } from './BetTypes'
import { GameSubTypes } from './GameSubTypes'
import { Competition } from './CompetitionSchema'
import { Team } from './Team'
import { Group } from './Group'
import { Bet } from './Bet'
import { GameDataGoal } from './GameDataGoal'

export class Game extends Model implements BetableInterface {
  protected table = 'matches'

  static readonly TYPE_KNOCKOUT = 'knockout'
  static readonly TYPE_GROUP_STAGE = 'group_stage'
  static readonly LEG_TYPE_FIRST = 'first'
  static readonly LEG_TYPE_SECOND = 'second'

  isTwoLeggedTie(): boolean {
    if (!this.isKnockout()) {
      return false
    }
    if (this.competition.getCompetitionType() == Competition.TYPE_UCL) {
      if (this.isTheFinal()) {
        return false
      }
      return true
    }
    return false
  }

  isLastLeg(): boolean {
    if (!this.isTwoLeggedTie()) {
      return true
    }
    return this.ko_leg == Game.LEG_TYPE_SECOND
  }

  isFirstLeg(): boolean {
    if (!this.isTwoLeggedTie()) {
      return true
    }
    return this.ko_leg == Game.LEG_TYPE_FIRST
  }

  isSecondLeg(): boolean {
    return this.isTwoLeggedTie() && this.isLastLeg()
  }

  getAggResults(): { home: number, away: number } | null {
    if (!this.isSecondLeg()) {
      return null
    }
    const firstLegGame = this.getOtherLegGame()
    const teamsGoals = {
      [firstLegGame.team_home_id]: firstLegGame.result_home ?? 0,
      [firstLegGame.team_away_id]: firstLegGame.result_away ?? 0,
    }
    return {
      home: teamsGoals[this.team_home_id] + this.result_home,
      away: teamsGoals[this.team_away_id] + this.result_away,
    }
  }

  getOtherLegGame(): Game | null {
    if (!this.isTwoLeggedTie()) {
      return null
    }
    return this.competition.games.find((g: Game) =>
      g.isTwoLeggedTie() && g.stage == this.stage && g.subType == this.subType
      && [g.team_home_id, g.team_away_id].sort().join() == [this.team_home_id, this.team_away_id].sort().join()
      && g.id != this.id
    )
  }

  isKnockout(): boolean {
    return this.type == Game.TYPE_KNOCKOUT
  }

  decompleteBets(): void {
    for (const bet of this.getBets()) {
      bet.score = null
      bet.save()
      console.log(`User