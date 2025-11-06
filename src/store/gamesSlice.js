import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MockGamesAPI from "../api/gamesMockApi";


export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (_, { rejectWithValue }) => {
    try {
      const data = await MockGamesAPI.fetchGames();
      return data;
    } catch (err) {
      return rejectWithValue(err.message || "Failed to fetch games");
    }
  }
);

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearGames(state) {
      state.games = [];
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.games = action.payload;
        state.loading = false;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearGames } = gamesSlice.actions;
export default gamesSlice.reducer;
