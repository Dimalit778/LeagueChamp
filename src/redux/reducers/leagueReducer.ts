import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LeagueState {
  league_id: string;
  name: string;
  emblem: string;
  code: string;
}

const initialState: LeagueState = {
  league_id: '',
  name: '',
  emblem: '',
  code: '',
};

export const leagueSlice = createSlice({
  name: 'league',
  initialState,
  reducers: {
    setLeague: (state, action) => {
      state.league_id = action.payload.leagueId;
      state.code = action.payload.code;
    },
    setLeagueNameAndEmblem: (state, action) => {
      state.name = action.payload.name;
      state.emblem = action.payload.emblem;
    },
  },
});

export const { setLeague, setLeagueNameAndEmblem } = leagueSlice.actions;

export default leagueSlice.reducer;
