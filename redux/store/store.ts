import { configureStore } from '@reduxjs/toolkit';
import leagueReducer from '../reducers/leagueReducer';
import userReducer from '../reducers/userReducer';

export const store = configureStore({
  reducer: {
    league: leagueReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
