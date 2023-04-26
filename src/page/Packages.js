import {
  Button,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import React from "react";
import PackagesAni from "../components/animations/PackagesAni";

let theme = createTheme({
  typography: {
    fontFamily: "'Gabriela', serif",
  },
});
theme = responsiveFontSizes(theme);

function Packages() {
  return (
    <div id="packages">
      <ThemeProvider theme={theme}>
        <Typography
          sx={{ paddingTop: "0.5em", paddingLeft: "0.5em" }}
          variant="h4"
        >
          Packages
        </Typography>
        <Typography
          sx={{ paddingTop: "1em", textAlign: "center" }}
          variant="h3"
        >
          Best Nail Art Studio
        </Typography>

        <PackagesAni />

        <Grid
          sx={{ marginTop: "3em", marginBottom: "2em" }}
          container
          justifyContent="center"
        >
          <Button
            className="contact-button"
            sx={{
              fontFamily: "Fira Sans",
              fontSize: "20px",
              borderRadius: "50px",
              width: "170px",
              paddingTop: "10px",
            }}
            variant="contained"
          >
            Book now
          </Button>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Packages;
