import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import image from "../img/unsplash_mEZ3PoFGs_k.png";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 250, paddingTop: "1em" }}>
      <CardMedia
        sx={{ borderRadius: "50%", width: "150px", margin: "auto" }}
        component="img"
        height="150px"
        image={image}
        alt=""
      />
      <CardContent>
        <Typography
          sx={{
            fontFamily: "Fira Sans",
            fontSize: "18px",
            textAlign: "center",
            color: "#4F4F4F",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Tempus ullamcorper quis morbi
          fermentum venenatis amet porttitor
        </Typography>
        <Grid container justifyContent="center">
          <Rating readOnly sx={{ padding: "1em" }} />
          <Typography sx={{ color: "#4F4F4F" }} variant="h4">
            -Richa
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
