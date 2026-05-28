import React, { useEffect, useRef } from "react";
import "../styles/Sponsors.css";

function Sponsers() {
  const trackRef = useRef(null);

  const titleSponsors = [{ src: "/images/Sponsers/NEA.webp", alt: "NEA" }];

  const sponsors = [
    { src: "/images/Sponsers/Makuchhen.png", alt: "Sponser 1" },
    { src: "/images/Sponsers/Sarvada.png", alt: "Sponsor 2" },
    { src: "/images/Sponsers/Plantae.png", alt: "Sponsor 3" },
    { src: "/images/Sponsers/Pathivara.jpg", alt: "Sponsor 4" },
    { src: "/images/Sponsers/CNC.jpg", alt: "Sponsor 5" },
    { src: "/images/Sponsers/Clamphook.png", alt: "Sponsor 6" },
    { src: "/images/Sponsers/AAEC.png", alt: "Sponsor 7" },
    { src: "/images/Sponsers/ArtisanBakery.png", alt: "Sponsor 8" },
    { src: "/images/Sponsers/The Plant Room.webp", alt: "Sponsor 9" },
    { src: "/images/Sponsers/LooksCart.webp", alt: "Sponsor 10" },
    { src: "/images/Sponsers/AbroadKhabar.webp", alt: "Sponsor 11" },
    { src: "/images/Sponsers/Kodali.webp", alt: "Sponsor 12" },
    { src: "/images/Sponsers/MinichaLogo (1).svg", alt: "Sponsor 13" },
    { src: "/images/Sponsers/OOPS.webp", alt: "Sponsor 14" },
    { src: "/images/Sponsers/Orion.webp", alt: "Sponsor 15" },
    { src: "/images/Sponsers/Podway.webp", alt: "Sponsor 16" },
    { src: "/images/Sponsers/Ralycos.webp", alt: "Sponsor 17" },
    { src: "/images/Sponsers/TinyTreasure.webp", alt: "Sponsor 18" },
    { src: "/images/Sponsers/YalaGarden_cafe.webp", alt: "Sponsor 19" },
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
    <div id="Sponsers" className="container">
      <div className="container-header">
        <h1>Partners and Collaborators</h1>
      </div>

      <div className="title-sponsors-section">
        <div className="title-sponsors-grid">
          <h4>Title Sponsor</h4>
          {titleSponsors.map((sponsor, index) => (
            <div key={index} className="title-sponsor-card">
              <img src={sponsor.src} alt={sponsor.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-container">
        <div className="carousel-track" ref={trackRef}>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-card">
              <img src={sponsor.src} alt={sponsor.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsers;
