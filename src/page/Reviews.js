import {
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import React from "react";
import ActionAreaCard from "../components/ActionAreaCard";

let theme = createTheme({
  typography: {
    fontFamily: "'Gabriela', serif",
  },
});
theme = responsiveFontSizes(theme);

function Reviews() {
  return (
    <div id="reviews">
      <ThemeProvider theme={theme}>
        <Typography variant="h4">Satisfied Clients</Typography>
        <Grid sx={{ padding: "2em" }} container justifyContent="space-around">
          {Array.from(Array(3)).map((_, index) => (
            <Grid key={index}>
              <ActionAreaCard />
            </Grid>
          ))}
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Reviews;
