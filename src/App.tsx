import "./App.css";
import { useGetPostsQuery } from "./app/features/postSlice";
import { useAppSelector } from "./utils/state-dispatch";

function App() {
  const { data, isLoading, isError } = useGetPostsQuery("getPosts");
  console.log(data);

  const res = useAppSelector((state) => state.postSlice);
  return (
    <div className="App">
      <h2>{res.count}</h2>
      {JSON.stringify(res)}
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <h2>{data.count}</h2> */}
      {data && JSON.stringify(data)}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
    </div>
  );
}

export default App;
