import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const initialState = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 2,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];

export const postApiSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
  }),
  overrideExisting: false,
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      postApiSlice.endpoints.getPosts.matchPending,
      (state, action) => {
        state = [];
      }
    );
    builder.addMatcher(
      postApiSlice.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        state = action.payload;
      }
    );
  },
});

export const { useGetPostsQuery } = postApiSlice;
export default postSlice.reducer;
