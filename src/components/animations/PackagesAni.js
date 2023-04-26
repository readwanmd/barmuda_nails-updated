import { Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PackagesAni() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const boxVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div>
      <Grid
        container
        sx={{ paddingTop: "2em" }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <motion.div
              ref={ref}
              className="Box"
              initial="hidden"
              animate={controls}
              variants={boxVariants}
            >
              <Paper
                className="paper"
                elevation={2}
                sx={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderRadius: "15px",
                  color: "#fff",
                  background:
                    "linear-gradient(300.43deg, rgba(229, 156, 95, 0.8) 42.72%, rgba(255, 221, 85, 0.6) 97.02%, rgba(255, 221, 85, 0.6) 97.02%);",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <div>
                    <Typography sx={{ fontSize: "22px" }}>
                      Acrylic Nails
                    </Typography>
                    <Typography sx={{ fontSize: "18px" }}>
                      Service Time 30 Min
                    </Typography>
                  </div>
                  <Typography sx={{ fontSize: "22px" }}>30€</Typography>
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
