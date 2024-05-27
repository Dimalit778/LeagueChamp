import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LeagueState {
  leagueData: {
    ownerId: string;
    leagueId: string;
    name: string;
    code: string;
  };
}

const initialState: LeagueState = {
  leagueData: {
    ownerId: null,
    leagueId: null,
    name: null,
    code: null,
  },
};

export const leagueSlice = createSlice({
  name: 'league',
  initialState,
  reducers: {
    saveLeagueState: (state, action: PayloadAction<any>) => {
      state.leagueData.ownerId = action.payload.ownerId;
      state.leagueData.leagueId = action.payload.leagueId;
      state.leagueData.name = action.payload.name;
      state.leagueData.code = action.payload.code;
    },
  },
});

export const { saveLeagueState } = leagueSlice.actions;

export default leagueSlice.reducer;
