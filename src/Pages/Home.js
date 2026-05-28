import React from "react";
import "../styles/Styles.css";

function Home() {
  return (
    <div id="home" className="home-container">
      <div className="home-title-overlay">
        <h1>IOE Pulchowk Girls</h1>
        <p className="home-subtitle">Education | Empowerment | Equality</p>
      </div>
      <img
        src="images/home/group.png"
        alt="Group"
        loading="lazy"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}

export default Home;
