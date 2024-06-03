import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LeagueState {
  league_id: string;
  code: string;
}

const initialState: LeagueState = {
  league_id: 'null',
  code: 'null',
};

export const leagueSlice = createSlice({
  name: 'league',
  initialState,
  reducers: {
    setLeague: (state, action) => {
      state.league_id = action.payload.leagueId;
      state.code = action.payload.code;
    },
  },
});

export const { setLeague } = leagueSlice.actions;

export default leagueSlice.reducer;
