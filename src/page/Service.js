import {
  Box,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import React from "react";
import ServiceAniSm from "../components/serviceAniSm";
import ServiceAniBg from "../components/serviceAniBg";

let theme = createTheme({
  typography: {
    fontFamily: "'Gabriela', serif",
  },
});
theme = responsiveFontSizes(theme);

export default function Service() {
  return (
    <div id="service">
      <ThemeProvider theme={theme}>
        <Typography sx={{ paddingBottom: "1em" }} variant="h4">
          What we provide
        </Typography>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <ServiceAniSm />
        </Box>
        <Box
          sx={{
            paddingTop: "2em",
            display: { xs: "none", sm: "block" },
          }}
        >
          <ServiceAniBg />
        </Box>
      </ThemeProvider>
    </div>
  );
}
