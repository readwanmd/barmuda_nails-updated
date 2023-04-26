import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import pictureOne from "../../../img/jodene-isakowitz-hvqHtZqNMeI-unsplash 1.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimateOne() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const animationOne = useAnimation();

  useEffect(() => {
    if (inView) {
      animationOne.start({
        x: 0,
        scale: 1,
        transition: {
          type: "spring",
          duration: 1,
        },
      });
    }
    if (!inView) {
      animationOne.start({
        x: "-100vw",
        scale: 0,
      });
    }
  }, [inView, animationOne]);

  return (
    <div ref={ref}>
      <motion.div className="section-service" animate={animationOne}>
        <img className="service-picture" src={pictureOne} alt="" />
        <Typography sx={{ fontSize: "18px", paddingTop: "1em" }}>
          Lorem ipsum dolor sit amet consectetur. Iaculis rutrum pellentesque mi
          tempor vitae.
        </Typography>
      </motion.div>
    </div>
  );
}
