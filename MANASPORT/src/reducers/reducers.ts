import { combineReducers } from "redux";
import { tokenReducer } from "./tokenReducer";
import { IUser, ITournament, ITeam, IMatch } from "../interfaces";
import { UsersReducer } from "./usersReducer";
import { LeaguesReducer } from './leagueReducer';
import { PlayoffsReducer } from './playoffReducer';
import { SetTournamentsIdReducer } from "./setTournamentsIdReducer";
import { TournamentTeamsReducer } from "./tournamentTeamsReducer";
import { MatchsReducer } from "./matchReducer";

export interface IGlobalState {
  token: string;
  users: IUser[];
  leagues: ITournament[];
  playoffs: ITournament[];
  TournamentId: number;
  leagueTeams: ITeam[];
  matchs: IMatch[];
};

export const reducers = combineReducers<IGlobalState>({
  token: tokenReducer,
  users: UsersReducer,
  leagues: LeaguesReducer,
  playoffs: PlayoffsReducer,
  TournamentId: SetTournamentsIdReducer,
  leagueTeams: TournamentTeamsReducer,
  matchs: MatchsReducer
});