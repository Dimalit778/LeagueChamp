import { useRealm } from '@realm/react';
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  currentUser: any;
}

const initialState: UserState = {
  currentUser: [null],
};

export const fetchUser = () => {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
export const { getUser } = userSlice.actions;

export default userSlice.reducer;
