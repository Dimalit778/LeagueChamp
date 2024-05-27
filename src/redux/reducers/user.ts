import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  currentUser: any;
}

const initialState: UserState = {
  currentUser: [],
};

export const user = (state = initialState, action: any) => {
  return {
    ...state,
    currentUser: action.currentUser,
  };
};
