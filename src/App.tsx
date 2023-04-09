import "./App.css";
import {
  useAddNewPostMutation,
  useGetPostsQuery,
} from "./app/features/postSlice";
import { useAppSelector } from "./utils/state-dispatch";

function App() {
  const { data, isLoading, isError, isFetching } = useGetPostsQuery("getPosts");
  const [addNewPost, { isSuccess, isUninitialized }] = useAddNewPostMutation();
  console.log(data);

  const onClick = async () => {
    const res = await addNewPost({
      userId: 1,
      id: 101,
      title: "CHECK ME TITLE",
      body: "CHECKMEBODY",
    }).unwrap();

    console.log(res);
  };

  const res = useAppSelector((state) => state.postSlice);
  return (
    <div className="App">
      {isFetching && <p>Fetching...</p>}
      <h2>{res.count}</h2>
      {JSON.stringify(res)}
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <h2>{data.count}</h2> */}
      {/* {data && JSON.stringify(data)} */}
      {isUninitialized ? <p>has not started</p> : <p>has started</p>}
      {isSuccess && <p>Sucessfully posted to api</p>}
      <button onClick={onClick}>Add the new Post</button>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
    </div>
  );
}

export default App;
