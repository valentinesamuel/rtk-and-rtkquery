import { Box, Card, CardContent, Typography } from "@mui/material";
import { useAppSelector } from "./utils/state-dispatch";

type Props = {};

const Messages = (props: Props) => {
  const res = useAppSelector((state) => state.messageSlice);
  return (
    <Box>
      {res.map((msg) => {
        return (
          <Card sx={{ borderColor: "primary.secondary", margin: "10px" }}>
            <CardContent>
              <Typography variant="h3" component="h3">
                {msg.sender}
              </Typography>
              <Typography variant="body1">{msg.content}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default Messages;
