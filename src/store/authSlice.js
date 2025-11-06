import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  phone: null,
  token: null, 
  expiresAt: null,
  isLoggedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.phone = action.payload.phone
      state.expiresAt = action.payload.expiresAt
      state.isLoggedIn = true
    },
    clearUser(state) {
      state.phone = null
      state.expiresAt = null
      state.isLoggedIn = false
    },
  },
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
