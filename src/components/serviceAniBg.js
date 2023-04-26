import { Grid } from "@mui/material";
import React from "react";
import AnimateOne from "./animations/serviceAniBig.js/AnimateOne";
import AnimateTwo from "./animations/serviceAniBig.js/AnimateTwo";
import AnimateThree from "./animations/serviceAniBig.js/AnimateThree";

export default function ServiceAniBg() {
  return (
    <Grid spacing={7} container justifyContent="center">
      <Grid item sm={6} md={4}>
        <AnimateOne />
      </Grid>
      <Grid item sm={6} md={4}>
        <AnimateTwo />
      </Grid>

      <Grid item sm={6} md={4}>
        {" "}
        <AnimateThree />
      </Grid>
    </Grid>
  );
}
