import React from "react";
import "../styles/ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us-container">
      <img
        src="/Logo.png"
        alt="Logo"
        style={{
          height: "40px",
          marginRight: "8px",
          marginLeft: "60px",
          verticalAlign: "middle",
          marginBottom: "60px",
        }}
      />
      <div className="contact-us-container-content">
        <h5 style={{ marginBottom: "20px" }}>CONTACT US</h5>
        <p>
          +9779847630043 <br />
          Pulchowk Campus, Lalitpur <br />
          pulchowkgirls@pcampus.edu.np
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
