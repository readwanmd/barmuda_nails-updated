import { Grid } from "@mui/material";
import React from "react";
import AnimateOne from "./animations/serviceAniSmall.js/AnimateOne";
import AnimateTwo from "./animations/serviceAniSmall.js/AnimateTwo";
import AnimateThree from "./animations/serviceAniSmall.js/AnimateThree";

export default function ServiceAniSm() {
  return (
    <Grid
      rowGap={8}
      container
      justifyContent="center"
      sx={{ paddingTop: "3em" }}
    >
      <AnimateOne />

      <AnimateTwo />

      <AnimateThree />
    </Grid>
  );
}
