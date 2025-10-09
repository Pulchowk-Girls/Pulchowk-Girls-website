import React from "react";
import "../styles/ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function ContactUs() {
  return (
    <div id="ContactUs" className="contact-us-container">
      <img
        src="/Logo.png"
        alt="Logo"
        style={{
          height: "40px",
          marginRight: "8px",
          marginLeft: "60px",
          verticalAlign: "middle",
          marginBottom: "40px",
        }}
      />
      <div className="contact-us-container-content">
        <section className="contact-us-header">
          <h5 style={{ marginBottom: "20px" }}>CONTACT US</h5>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +9779847630043 <br />
            <FontAwesomeIcon icon={faLocationDot} /> Pulchowk Campus, Lalitpur
            <br />
            <FontAwesomeIcon icon={faEnvelope} /> pulchowkgirls@pcampus.edu.np
          </p>
        </section>

        <section className="quick-links-section">
          <h5 style={{ marginBottom: "20px" }}>QUICK LINKS</h5>
          <p>
            Home <br />
            About Us <br />
            Events <br />
            Sponsors <br />
          </p>
        </section>

        <section className="follow-us-section">
          <h5 style={{ marginBottom: "20px" }}>FOLLOW US</h5>
          <p>
            <FontAwesomeIcon icon={faFacebook} />{" "}
            <FontAwesomeIcon icon={faGithub} />{" "}
            <FontAwesomeIcon icon={faLinkedin} />{" "}
            <FontAwesomeIcon icon={faInstagram} />{" "}
            <FontAwesomeIcon icon={faDiscord} />{" "}
          </p>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
