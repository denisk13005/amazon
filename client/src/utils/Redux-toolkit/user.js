import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getUsers } from "../../firebase/apiDbFirebase"

/**
 * async thunk who fetch de employees saved in the firestore db
 */
export const fetchDbUser = createAsyncThunk(
  "employees/fetchDbEmployees",
  async (email) => {
    console.log(email)
    let datas = await getUsers()
    let userLogg = datas.filter((el) => el.email === email)
    console.log(userLogg)
    return userLogg
  }
)

/**
 * employeeSlice
 * redux toolkit slice
 * @returns {reducer}  return reducer for modify redux state
 */

const userSlice = createSlice({
  //nom du slice
  name: "user",
  initialState: {
    informations: [],
    userLoggedIn: false,
  },
  reducers: {
    logIn: (state) => {
      state.userLoggedIn = true
      return state
    },
    logOut: (state) => {
      state.userLoggedIn = false
      return state
    },
  },
  extraReducers: {
    [fetchDbUser.fulfilled]: (state, { payload }) => {
      state.informations = [...payload]
      return state
    },
  },
})

export const { logIn, logOut } = userSlice.actions
export default userSlice.reducer
