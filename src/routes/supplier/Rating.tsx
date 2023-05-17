import { Stack, Rating } from "@mui/material";
import { useState } from "react";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating"
        // defaultValue={0}
        precision={0.5}
        value={value}
        onChange={handleChange}
      />
    </Stack>
  );
};
