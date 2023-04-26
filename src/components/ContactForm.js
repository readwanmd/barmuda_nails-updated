import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

function ContactForm() {
  return (
    <div>
      <form>
        <Grid
          container
          spacing={{ xs: 2 }}
          columnSpacing={{ sm: 4 }}
          rowSpacing={{ xs: 1, sm: 2 }}
        >
          {" "}
          <Grid item xs={12} sm={6}>
            <Typography>Vorname</Typography>
            <TextField
              className="MuiOutlinedInput-notchedOutline"
              fullWidth
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "#F7F8F8",
                border: "none",
                "& fieldset": { border: "none" },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Nachname</Typography>
            <TextField
              className="MuiOutlinedInput-notchedOutline"
              fullWidth
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "#F7F8F8",
                border: "none",
                "& fieldset": { border: "none" },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>E-Mail</Typography>
            <TextField
              className="MuiOutlinedInput-notchedOutline"
              fullWidth
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "#F7F8F8",
                border: "none",
                "& fieldset": { border: "none" },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Telefonnummer</Typography>
            <TextField
              className="MuiOutlinedInput-notchedOutline"
              fullWidth
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "#F7F8F8",
                border: "none",
                "& fieldset": { border: "none" },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Nachricht</Typography>
            <TextField
              className="MuiOutlinedInput-notchedOutline"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              sx={{
                backgroundColor: "#F7F8F8",
                border: "none",
                "& fieldset": { border: "none" },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              sx={{ fontSize: "16px" }}
              className="contact-button"
              variant="contained"
            >
              Senden
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default ContactForm;
