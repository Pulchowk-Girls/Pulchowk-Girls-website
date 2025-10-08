import React from "react";
import "../styles/AboutUs.css";
import "../styles/Styles.css";

function AboutUs() {
  return (
    <div className="container">
      <div className="container-header">
        <h1>About Us</h1>
      </div>

      <div className="about-content-wrapper">
        <div className="about-image-container">
          <img src="images/home/pgoffice.jpg" alt="About Us" />
        </div>

        <div className="about-text-content">
          <p>
            Pulchowk Girls is an inclusive and empowering community that has
            been established with the purpose of nurturing and cultivating
            leadership skills, fostering professional development, and
            advocating for gender equality among its members. Our core motto is
            to challenge prevailing gender stereotypes and contribute to making
            the world a better place through the pillars of education,
            empowerment, and equal opportunities.{" "}
          </p>
          <p>
            At Pulchowk Girls, we believe in taking proactive steps to create
            positive change. We actively organize a wide range of engaging
            activities, including debates, competitions, and various programs,
            all aimed at encouraging personal growth, fostering critical
            thinking, and providing platforms for showcasing talents.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
