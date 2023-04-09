import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const initialState = {
  posts: [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ],
  count: 0,
};

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }: any) => ({ type: "Post", id }))]
          : ["Post"],
    }),
    addNewPost: builder.mutation({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ['Post']
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
      postApiSlice.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        state.posts = action.payload;
        state.count = action.payload.length;
      }
    );
  },
});

export const { useGetPostsQuery, useAddNewPostMutation } = postApiSlice;
export default postSlice.reducer;
