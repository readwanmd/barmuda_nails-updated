import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import picutreTwo from "../../../img/giorgio-trovato-gb6gtiTZKB8-unsplash 1.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimateTwo() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const animationTwo = useAnimation();

  useEffect(() => {
    if (inView) {
      animationTwo.start({
        x: 0,
        scale: 1,
        transition: {
          type: "spring",
          duration: 1,
        },
      });
    }
    if (!inView) {
      animationTwo.start({
        x: "100vw",
        scale: 0,
      });
    }
  }, [inView, animationTwo]);

  return (
    <div ref={ref}>
      <motion.div className="section-service" animate={animationTwo}>
        <img className="service-picture" src={picutreTwo} alt="" />
        <Typography sx={{ fontSize: "18px", paddingTop: "1em" }}>
          Lorem ipsum dolor sit amet consectetur. Iaculis rutrum pellentesque mi
          tempor vitae.
        </Typography>
      </motion.div>
    </div>
  );
}
