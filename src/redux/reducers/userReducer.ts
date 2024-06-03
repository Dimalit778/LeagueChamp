import { useRealm } from '@realm/react';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ObjectId } from 'bson';

export interface League {
  _id: any;
}
interface User {
  _id: string;
  image: string;
  leagues: League[];
  name: string;
  userId: string;
}

const initialState: User = {
  _id: '',
  image: '',
  leagues: [],
  name: '',
  userId: '',
};

export const fetchUser = () => {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state._id = action.payload._id;
      state.image = action.payload.image;
      state.leagues = action.payload.leagues;
      state.name = action.payload.name;
      state.userId = action.payload.userId;
    },
  },
});
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
