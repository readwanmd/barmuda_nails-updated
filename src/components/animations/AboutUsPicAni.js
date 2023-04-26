import React from "react";
import pictureOne from "../../img/maria-lupan-LAeTFy7xmC0-unsplash.jpg";
import pictureTwo from "../../img/jesse-donoghoe-2aiP_wxNrfU-unsplash.jpg";
import { motion } from "framer-motion";

function AboutUsPicAni() {
  return (
    <div className="parent">
      <div className="first-child">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          {" "}
          <img
            className="first-child-pic"
            style={{ borderRadius: "7px" }}
            src={pictureOne}
            alt=""
          />
        </motion.div>
      </div>
      <div className="second-child">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          {" "}
          <img
            className="second-child-pic"
            style={{ borderRadius: "7px" }}
            src={pictureTwo}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUsPicAni;
