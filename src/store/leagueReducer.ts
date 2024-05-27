import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLeague } from './leagueActions';

export interface LeagueState {
  id: string;
  name: string;
  leagueImage: string;
  owner_id: string;
  league: any;
}

const initialState: LeagueState = {
  id: null,
  name: null,
  leagueImage: null,
  owner_id: null,
  league: [],
};

export const leagueSlice = createSlice({
  name: 'league',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLeague.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.leagueImage = action.payload.emblem;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = leagueSlice.actions;

export default leagueSlice.reducer;
