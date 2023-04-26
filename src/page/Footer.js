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
import { ImLocation, ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";

let theme = createTheme({
  typography: {
    fontFamily: "'Fira Sans'",
  },
});
theme = responsiveFontSizes(theme);

function Footer() {
  return (
    <div className="footer">
      <ThemeProvider theme={theme}>
        <Box sx={{ display: { sm: "none" } }}>
          <Grid container justifyContent="center">
            <Typography
              sx={{ paddingBottom: "1em", fontFamily: "'Gabriela', serif" }}
              className="bermuda-name"
              variant="h5"
            >
              Bermuda Nails
            </Typography>
          </Grid>

          <Grid container justifyContent="center">
            <ImLocation size="22px" />
            &nbsp;
            <Typography sx={{ paddingBottom: "15px" }}>
              Straße Hausnummer PLZ
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <ImPhone size="22px" />
            &nbsp;
            <Typography sx={{ paddingBottom: "15px" }}>
              {" "}
              Telefonnummer
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <MdEmail size="22px" />
            &nbsp;
            <Typography sx={{ paddingBottom: "15px" }}>
              E-Mail-Adresse
            </Typography>
          </Grid>

          <Grid container justifyContent="center">
            <img src={facebook} alt="" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <img src={instagram} alt="" />
          </Grid>

          <Grid sx={{ paddingTop: "15px" }} container justifyContent="center">
            <Typography>Wichtiger Inhalt</Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Typography>Datenschutz (DSGVO)</Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Typography>AGB</Typography>
          </Grid>
        </Box>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Typography
            sx={{ paddingBottom: "1em", fontFamily: "'Gabriela', serif" }}
            className="bermuda-name"
            variant="h5"
          >
            Bermuda Nails
          </Typography>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid>
              {" "}
              <Stack direction="row" sx={{ paddingBottom: "10px" }}>
                <ImLocation size="22px" />
                &nbsp;
                <Typography>Straße Hausnummer PLZ</Typography>
              </Stack>
              <Stack direction="row" sx={{ paddingBottom: "10px" }}>
                <ImPhone size="22px" />
                &nbsp;
                <Typography>Telefonnummer</Typography>
              </Stack>
              <Stack direction="row" sx={{ paddingBottom: "10px" }}>
                <MdEmail size="22px" />
                &nbsp;
                <Typography>E-Mail-Adresse</Typography>
              </Stack>
              <Stack direction="row" spacing={4}>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
              </Stack>
            </Grid>

            <Grid>
              {" "}
              <Typography>Wichtiger Inhalt</Typography>
              <Typography>Datenschutz (DSGVO)</Typography>
              <Typography>AGB</Typography>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Footer;
