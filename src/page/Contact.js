import {
  Box,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import React from "react";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

let theme = createTheme({
  typography: {
    fontFamily: "'Fira Sans'",
  },
});
theme = responsiveFontSizes(theme);

export default function Contact() {
  return (
    <div id="contact">
      <ThemeProvider theme={theme}>
        <Typography sx={{ fontFamily: "'Gabriela', serif" }} variant="h4">
          Contact
        </Typography>
        <Box
          sx={{ display: { xs: "none", md: "block" } }}
          className="contact-content"
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            sx={{ paddingTop: "2em" }}
          >
            {" "}
            <ContactForm />
            <Map />
          </Stack>
        </Box>
        <Box sx={{ display: { md: "none" } }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <ContactForm />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ paddingTop: "4em" }}
          >
            {" "}
            <Map />
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}
