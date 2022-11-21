import React, { useContext } from "react";
import "./Works.css";
import carznation from "../../img/carznation.png";
import mycheist from "../../img/my-cheist.png";
import resourceone from "../../img/resourceone.jfif";
import mwpartners from "../../img/mwpartners.png";
import unravelcloud from "../../img/unravel-cloud.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            
We have an extensive list of satisfied clients that we are proud to announce. With several years in this domain,
            <br />
            our team promises to understand every client's needs. 
            <br />
            Some of the top names are MW Partners,
            <br />
             Unravel Cloud, and Chemist Warehouse.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={mycheist} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={carznation} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={resourceone} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={unravelcloud} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={mwpartners} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
