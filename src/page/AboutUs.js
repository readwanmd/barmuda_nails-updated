import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CountUpToFiveHun from "../components/CountUpToFiveHun";
import CountUpToFive from "../components/CountUpToFive";
import AboutUsPicAni from "../components/animations/AboutUsPicAni";

let theme = createTheme({
  typography: {
    fontFamily: "'Gabriela', serif",
  },
});
theme = responsiveFontSizes(theme);

export default function AboutUs() {
  return (
    <div id="about-us">
      <ThemeProvider theme={theme}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={6}>
            <Stack spacing={{ xs: 3, md: 4 }}>
              <Typography variant="h4">About us</Typography>

              <Typography sx={{ color: "#E59C5F" }} variant="h3">
                Best Nail Art Studio
              </Typography>

              <Typography sx={{ fontSize: "18px" }}>
                Lorem ipsum dolor sit amet consectetur. Iaculis rutrum
                pellentesque mi tempor vitae. Id neque sed fringilla sit.Lorem
                ipsum dolor sit amet consectetur. Iaculis rutrum pellentesque mi
                tempor vitae. Id neque sed fringilla sit.
              </Typography>

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
                Contact us
              </Button>

              <Grid container justifyContent="space-between">
                <Grid>
                  {" "}
                  <Typography variant="h2">
                    <CountUpToFiveHun />
                  </Typography>
                  <Typography sx={{ fontSize: "18px", color: "#E59C5F" }}>
                    zufriedene Kunden
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h2">
                    <CountUpToFive />
                  </Typography>
                  <Typography sx={{ fontSize: "18px", color: "#E59C5F" }}>
                    Jahre Erfahrung
                  </Typography>
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} lg={6}>
            <AboutUsPicAni />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
