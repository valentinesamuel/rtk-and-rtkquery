import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Jason Hayes",
    username: "Jayes",
    email: "test@test.come",
    phone: "1-442",
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer