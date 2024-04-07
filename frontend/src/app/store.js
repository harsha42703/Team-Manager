import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/User/UserSlice';
import teamReducer from '../features/Team/team';

export const store = configureStore({
  reducer: {
    user: userReducer,
    team: teamReducer,
    userSlice: userReducer,
  },
});
