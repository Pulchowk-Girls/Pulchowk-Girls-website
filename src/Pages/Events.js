import React, { useState } from "react";
import "../styles/Events.css";
import "../styles/Styles.css";

function Events() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="container">
      <div className="container-header">
        <h1>Recent Events</h1>
      </div>
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
      
    </div>
  );
}

export default Events;
