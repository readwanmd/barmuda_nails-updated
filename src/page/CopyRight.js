import { Grid, Typography } from "@mui/material";
import React from "react";

function CopyRight() {
  return (
    <div>
      <Grid sx={{ padding: "1em" }} container justifyContent="center">
        <Typography sx={{ fontSize: "18px" }}>&copy; Copyright 2023</Typography>
      </Grid>
    </div>
  );
}

export default CopyRight;
