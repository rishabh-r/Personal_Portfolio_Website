import React, { useContext } from "react";
import "./Experience.css";
import { themeContext } from "../../Context";
const Experience = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Hard
          </span>
          <span>Skills</span>
          <span>
            <p style={{ fontSize: 25 }}>
              • ASP.NET Core Web API
              <br />
              • Responsive Web Design
              <br />
              • HTML & CSS
              <br />
              • Typescript
              <br />
              • Javascript
              <br />
              • Bootstrap <br />
              • Angular
              <br />
              • React
              <br />
              • C#
              <br />

            </p>


          </span>
          <span style={{ color: darkMode ? "white" : "" }}>
            Soft
          </span>
          <span>Skills</span>
          <span>
            <p style={{ fontSize: 25 }}>
              • Leadership Abilites
              <br />
              • Good Communication
              <br />
              • Decision Making
              <br />
              • Able to work calmly under pressure
              <br />
           

            </p>

            
          </span>

          

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
          <div
            className="blur s-blur2"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>


        {/* right side */}
      
      <div className="w-right">
        <div className="awesome">
          {/* dark Mode */}
        
        </div>
      </div>

    </div>
  );
};

export default Experience;
