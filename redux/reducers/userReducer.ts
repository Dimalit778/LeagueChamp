import { useRealm } from '@realm/react';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ObjectId } from 'bson';
import { useCallback } from 'react';

export interface League {
  _id: any;
}
interface User {
  id: string;
  name: string;
  email: string;
}

const initialState: User = {
  id: '',
  name: '',
  email: '',
};

export const fetchUser = () => {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log('action', action);
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  },
});
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
