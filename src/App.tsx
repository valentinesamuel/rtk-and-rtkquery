import "./App.css";
import { useGetPostsQuery } from "./app/features/postSlice";
import { useAppSelector } from "./utils/state-dispatch";

function App() {
  const { data, isLoading,isError } = useGetPostsQuery();
console.log(data);

  const res = useAppSelector((state) => state.postSlice);
  return (
    <div className="App">
      {JSON.stringify(res)}
      <br />
      {data && JSON.stringify(data)}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
    </div>
  );
}

export default App;
