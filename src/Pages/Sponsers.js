import React, { useEffect, useRef } from "react";
import "../styles/Sponsors.css";

function Sponsers() {
  const trackRef = useRef(null);

  const sponsors = [
    { src: "/images/Sponsers/Makuchhen.png", alt: "Makuchhen" },
    { src: "/images/Sponsers/Sarvada.png", alt: "Sponsor 2" },
    { src: "/images/Sponsers/Plantae.png", alt: "Sponsor 3" },
    { src: "/Logo.png", alt: "Sponsor 4" },
    { src: "/Logo.png", alt: "Sponsor 5" },
    { src: "/images/Sponsers/Clamphook.png", alt: "Sponsor 6" },
    { src: "/images/Sponsers/AAEC.png", alt: "Sponsor 7" },
    { src: "/images/Sponsers/ArtisanBakery.png", alt: "Sponsor 8" },
    { src: "/Logo.png", alt: "Sponsor 9" },
    { src: "/Logo.png", alt: "Sponsor 10" },
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      // Clone the sponsors for seamless loop
      const originalChildren = Array.from(track.children);
      originalChildren.forEach((child) => {
        const clone = child.cloneNode(true);
        track.appendChild(clone);
      });
    }
  }, []);

  return (
    <div className="container">
      <div className="container-header">
        <h1>Partners and Collaborators</h1>
      </div>

      <div className="carousel-container">
        <div className="carousel-track" ref={trackRef}>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-card">
              <img src={sponsor.src} alt={sponsor.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsers;
