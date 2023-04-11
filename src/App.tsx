import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import {
  useAddNewPostMutation,
  useGetPostsQuery,
} from "./app/features/postSlice";
import { useAppSelector } from "./utils/state-dispatch";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CssBaseline,
  Typography,
  createTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
const label = { inputProps: { "aria-label": "Color switch demo" } };
import { darkTheme, lightTheme } from "./utils/theme";

function App() {
  const { data, isLoading, isError, isFetching } = useGetPostsQuery("getPosts");
  const [addNewPost, { isSuccess, isUninitialized }] = useAddNewPostMutation();
  const [UIMode, setUIMode] = useState("dark");

  const onClick = async () => {
    const res = await addNewPost({
      userId: 1,
      id: 101,
      title: "CHECK ME TITLE",
      body: "CHECKMEBODY",
    }).unwrap();

    console.log(res);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(UIMode);

    setUIMode(UIMode === "dark" ? "light" : "dark");
  };

  const res = useAppSelector((state) => state.postSlice);
  return (
    <ThemeProvider theme={UIMode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box>
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
        <Switch
          {...label}
          sx={{
            color: "success",
          }}
          color="default"
          checked={UIMode === "dark" ? true : false}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          sx={{
            color: "aquagreen",
          }}
          onClick={onClick}
        >
          Add the new Post
        </Button>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        <Card>
          <CardContent>
            <Typography variant="h3" component="h3">
              valenin.com
            </Typography>
            <Typography variant="body1">
              Dark Mode is {UIMode === "dark" ? "On" : "Off"}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

export default App;
