import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice";
import gamesReducer from "./gamesSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    games: gamesReducer,
  },
});

export default store; 
