import React, { useState } from "react";
import "../styles/Events.css";
import "../styles/Styles.css";

function Events() {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  const [hovered7, setHovered7] = useState(false);
  const [hovered8, setHovered8] = useState(false);
  const [hovered9, setHovered9] = useState(false);
  return (
    <div className="container">
      <div className="container-header">
        <h1>Recent Events</h1>
      </div>
      <div className="events-cards-container">
        {/* First Row */}
        <div
          className="card bg-dark text-white"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={
              hovered
                ? "images/Events/PAVAN_poster_hover.jpg"
                : "images/Events/PAVAN_poster.jpg"
            }
            className="card-img"
            alt="Event 1"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">
              PAVAN - Pads Accessible Visible Available Now
            </h6>
          </div>
        </div>

        <div
          className="card bg-dark text-white"
          onMouseEnter={() => setHovered2(true)}
          onMouseLeave={() => setHovered2(false)}
        >
          <img
            src={
              hovered2
                ? "images/Events/Financial_Literacy_hover.png"
                : "images/Events/Financial_Literacy.png"
            }
            className="card-img"
            alt="Event 2"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">
              Women and the Economy: The Role of Financial Literacy
            </h6>
          </div>
        </div>

        <div
          className="card bg-dark text-white"
          onMouseEnter={() => setHovered3(true)}
          onMouseLeave={() => setHovered3(false)}
        >
          <img
            src={
              hovered3
                ? "images/Events/Women_InLead_hover.png"
                : "images/Events/Women_InLead.png"
            }
            className="card-img"
            alt="Event 3"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">Women in Lead: Voices That Matter</h6>
          </div>
        </div>

        {/* Second Row */}
        <div
          className="card bg-dark text-white"
          onMouseEnter={() => setHovered4(true)}
          onMouseLeave={() => setHovered4(false)}
        >
          <img
            src={
              hovered4
                ? "images/Events/SCIF_hover.png"
                : "images/Events/SCIF.png"
            }
            className="card-img"
            alt="Event 4"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">Supporting Children Initiative Foundation (SCIF) NEPAL</h6>
          </div>
        </div>

        <div
          className="card bg-dark text-white"
          onMouseEnter={() => setHovered5(true)}
          onMouseLeave={() => setHovered5(false)}
        >
          <img
            src={
              hovered5
                ? "images/Events/Impact_Marathon_hover.png"
                : "images/Events/Impact_Marathon.png"
            }
            className="card-img"
            alt="Event 5"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">Third Imapact Marathon</h6>
          </div>
        </div>

        <div
          className="card bg-dark text-white"
          onMouseEnter={() => setHovered6(true)}
          onMouseLeave={() => setHovered6(false)}
        >
          <img
            src="images/Events/PAVAN_poster.jpg"
            className="card-img"
            alt="Event 6"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">Event Title 6</h6>
          </div>
        </div>

        {/* Third Row */}
        <div
          className="card bg-dark text-white"
          onMouseEnter={() => setHovered7(true)}
          onMouseLeave={() => setHovered7(false)}
        >
          <img
            src="images/Events/PAVAN_poster.jpg"
            className="card-img"
            alt="Event 7"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">Event Title 7</h6>
          </div>
        </div>

        <div
          className="card bg-dark text-white"
          onMouseEnter={() => setHovered8(true)}
          onMouseLeave={() => setHovered8(false)}
        >
          <img
            src="images/Events/PAVAN_poster.jpg"
            className="card-img"
            alt="Event 8"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">Event Title 8</h6>
          </div>
        </div>

        <div
          className="card bg-dark text-white"
          onMouseEnter={() => setHovered9(true)}
          onMouseLeave={() => setHovered9(false)}
        >
          <img
            src="images/Events/PAVAN_poster.jpg"
            className="card-img"
            alt="Event 9"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">Event Title 9</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
