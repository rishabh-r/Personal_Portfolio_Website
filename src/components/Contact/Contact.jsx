import React, { useContext} from "react";
import './Contact.css'
import { themeContext } from "../../Context";


const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <div className="contact-form">
        <div className="w-left">
          <div className="awesome">
            <span style={{color: darkMode?'white': ''}}>Get in touch</span>
            <span>Contact Me</span>
            <span>rishabh.raj120999@gmail.com</span>
            <div className="blur s-blur1" style={{background:'#ABF1FF94'}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
