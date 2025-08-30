import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  _id: "",
  name: "",
  email: "",
  moile: "",
};
const userSlice = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {
    setUserDetails: (state, action) => {
      return { ...state,...action.payload };
      },
      logout: (state, action) => {
          return initialValue
      }
  },
});

export const { setUserDetails,logout } = userSlice.actions;
export default userSlice.reducer;
