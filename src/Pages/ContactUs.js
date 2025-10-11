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
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 76; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
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
            <span onClick={() => handleClick("home")} className="quick-link">
              Home
            </span>{" "}
            <br />
            <span onClick={() => handleClick("AboutUs")} className="quick-link">
              About Us
            </span>{" "}
            <br />
            <span onClick={() => handleClick("Events")} className="quick-link">
              Events
            </span>{" "}
            <br />
            <span
              onClick={() => handleClick("Sponsers")}
              className="quick-link"
            >
              Sponsors
            </span>{" "}
            <br />
            <span
              onClick={() => handleClick("Committee")}
              className="quick-link"
            >
              Committee
            </span>{" "}
            <br />
          </p>
        </section>

        <section className="follow-us-section">
          <h5 style={{ marginBottom: "20px" }}>FOLLOW US</h5>
          <p>
            <a
              href="https://www.facebook.com/pulchowk.girls"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>{" "}
            <a
              href="https://github.com/pulchowk-girls"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>{" "}
            <a
              href="https://www.linkedin.com/company/ioe-pulchowk-girls/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>{" "}
            <a
              href="https://www.instagram.com/pulchowk.girls/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>{" "}
            <a
              href="https://discord.gg/u6rrgSSr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} />{" "}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
