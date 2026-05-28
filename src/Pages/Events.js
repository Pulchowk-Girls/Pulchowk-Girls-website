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
    <div id="Events" className="container">
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
                ? "images/Events/SCIF2_hover.jpg"
                : "images/Events/SCIF2.jpg"
            }
            loading="lazy"
            className="card-img"
            alt="Event 1"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">
              Supporting Children Initiative Foundation (SCIF) NEPAL
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
                ? "images/Events/Herizon.jpg"
                : "images/Events/Herizon_hover.jpg"
            }
            loading="lazy"
            className="card-img"
            alt="Event 2"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">
              Herizon - National Empowerment Summit
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
                ? "images/Events/panel_discussion_hover.jpg"
                : "images/Events/panel_discussion.jpg"
            }
            loading="lazy"
            className="card-img"
            alt="Event 3"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">
              Panel Discussion on From Law to Ground Reality
            </h6>
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
                ? "images/Events/Herizon_talkshow.jpg"
                : "images/Events/Herizon_talkshow_hover.jpg"
            }
            loading="lazy"
            className="card-img"
            alt="Event 4"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">HERIZON Talk Show - Her Stories</h6>
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
                ? "images/Events/PAVAN_poster_hover.jpg"
                : "images/Events/PAVAN_poster.jpg"
            }
            loading="lazy"
            className="card-img"
            alt="Event 5"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">
              PAVAN - Pads Accessible Visible Available Now
            </h6>
          </div>
        </div>

        <div
          className="card bg-dark text-white"
          onMouseEnter={() => setHovered6(true)}
          onMouseLeave={() => setHovered6(false)}
        >
          <img
            src={
              hovered6
                ? "images/Events/Financial_Literacy_hover.png"
                : "images/Events/Financial_Literacy.png"
            }
            loading="lazy"
            className="card-img"
            alt="Event 6"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">
              Women and the Economy: The Role of Financial Literacy
            </h6>
          </div>
        </div>

        {/* Third Row */}
        <div
          className="card bg-dark text-white"
          onMouseEnter={() => setHovered7(true)}
          onMouseLeave={() => setHovered7(false)}
        >
          <img
            src={
              hovered7
                ? "images/Events/Women_InLead_hover.png"
                : "images/Events/Women_InLead.png"
            }
            loading="lazy"
            className="card-img"
            alt="Event 7"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">Women in Lead: Voices That Matter</h6>
          </div>
        </div>

        <div
          className="card bg-dark text-white"
          onMouseEnter={() => setHovered8(true)}
          onMouseLeave={() => setHovered8(false)}
        >
          <img
            src={
              hovered8
                ? "images/Events/mens_hygiene.jpg"
                : "images/Events/mens_hygiene_hover.jpg"
            }
            loading="lazy"
            className="card-img"
            alt="Event 8"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">
              Menstrual Health Awareness & Sanitary Kit Distribution Program
            </h6>
          </div>
        </div>

        <div
          className="card bg-dark text-white"
          onMouseEnter={() => setHovered9(true)}
          onMouseLeave={() => setHovered9(false)}
        >
          <img
            src={
              hovered9
                ? "images/Events/Impact_Marathon_hover.jpg"
                : "images/Events/Impact_Marathon.jpg"
            }
            loading="lazy"
            className="card-img"
            alt="Event 9"
          />
          <div className="card-img-overlay">
            <h6 className="card-title">Fourth Imapact Marathon</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
