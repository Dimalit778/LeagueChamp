import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LeagueState {
  data: any;
}

const initialState: LeagueState = {
  data: null,
};

export const leagueSlice = createSlice({
  name: 'league',
  initialState,
  reducers: {
    saveLeagueState: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { saveLeagueState } = leagueSlice.actions;

export default leagueSlice.reducer;
