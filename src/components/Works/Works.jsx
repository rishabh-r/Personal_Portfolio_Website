import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Facebook from "../../img/Facebook.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
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
            Work
          </span>
          <span>Experience</span>
          <span>

            <p style={{ fontWeight: 1000 }}>HCL Technologies | Technical Lead
              <br />
              (18/10/2022 - present)
              <br />
              <p style={{ fontWeight: 20, fontSize: 15 }}>Role - DotNet FullStack Developer</p>
              <p style={{ fontWeight: 20, fontSize: 15 }}>Key responsibilities:
                <br />  • Built browser user interfaces with basic
                knowledge of HTML, CSS, and SCRIPT
                <br />
                • Build features and applications with a mobile
                responsive design
                <br />
                • Design client-side and server-side architecture
                <br />
                • Write effective APIs using Asp.net Web API</p>
            </p>
       
            
            <p style={{ fontWeight: 1000 }}>Infosys Limited | Systems Engineer
              <br />
              (29/03/2021 - 15/06/2022)
              <br />
              <p style={{ fontWeight: 20, fontSize: 15 }}>Role - Front-end Designer</p>
              <p style={{ fontWeight: 20, fontSize: 15 }}>Key responsibilities:
                <br /> • Debug Angular codes.
                <br />
                • Modify the designs of web pages using CSS.
                <br />
                • Preparing reports on the code changes on a weekly
                basis.</p>
            </p>


          </span>
         
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
          <div className="w-secCircle1">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle3">
            <img src={Facebook} alt="" />
          </div>
          
          <div className="w-secCircle">
            <img alt="" />
          </div>{" "}
         
          <div className="w-secCircle4">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-secCircle2">
            <img src={Fiverr} alt="" />
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
