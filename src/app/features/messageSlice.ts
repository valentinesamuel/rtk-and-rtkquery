import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    sender: "Lilian Oserov",
    content: "Please prepare blood test result for patient 1452",
    topic: "Blood Test Result",
  },
  {
    sender: "Halima Perry",
    content: "Create battle readiness certificate for patient 1593",
    topic: "Battle Readiness Certificate",
  },
];

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
});

export default messageSlice.reducer