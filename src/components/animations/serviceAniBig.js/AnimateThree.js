import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import pictureThree from "../../../img/rashid-khreiss-pVw3XzhdKJg-unsplash 1.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimateThree() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const animationThree = useAnimation();

  useEffect(() => {
    if (inView) {
      animationThree.start({
        x: 0,
        scale: 1,
        transition: {
          type: "spring",
          duration: 1,
        },
      });
    }
    if (!inView) {
      animationThree.start({
        x: "100vw",
        scale: 0,
      });
    }
  }, [inView, animationThree]);

  return (
    <div className="section-service" ref={ref}>
      <motion.div animate={animationThree}>
        <img className="service-picture" src={pictureThree} alt="" />
        <Typography
          className="service-text"
          sx={{ fontSize: "18px", paddingTop: "1em" }}
        >
          Lorem ipsum dolor sit amet consectetur. Iaculis rutrum pellentesque mi
          tempor vitae.
        </Typography>
      </motion.div>
    </div>
  );
}
