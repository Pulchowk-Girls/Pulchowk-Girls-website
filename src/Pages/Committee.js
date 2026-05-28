import React from "react";
import "../styles/Committee.css";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Committee() {
  // Sample committee members data
  const committeeMembers = [
    {
      id: 1,
      name: "Sujita Sharma",
      position: "President",
      bio: "Leads the team with vision and purpose, driving initiatives that empower women in technology.",
      photo: "/images/Committee/Sujita.jpg",
      social: {
        facebook: "https://www.facebook.com/sujita.sharma.167",
        linkedin:
          "https://www.linkedin.com/in/sujita-sharma-33a38032a?trk=contact-info",
        instagram:
          "https://www.instagram.com/_sujitaaa__?igsh=MXdlaGc3ZWp4a2Yxeg%3D%3D&utm_source=qr",
      },
    },
    {
      id: 2,
      name: "Anupa Ranabhat",
      position: "Secretary",
      bio: "Oversees communication, documentation, and smooth coordination across all operations.",
      photo: "/images/Committee/Anupa.jpg",
      social: {
        facebook: "https://www.facebook.com/anupa.ranabhat.94",
        linkedin: "https://www.linkedin.com/in/anupa-ranabhat/",
        github: "https://github.com/anupa-rb",
        instagram: "https://www.instagram.com/anupa.ranabhat/",
      },
    },
    {
      id: 3,
      name: "Swastika Acharya",
      position: "Event Manager",
      bio: "Coordinates large-scale programs and ensures event logistics run seamlessly.",
      photo: "/images/Committee/Swastika.jpg",
      social: {
        facebook: "http://swastikawww.facebook.com/divyashree.acharya.2025/",
        instagram: "https://www.instagram.com/dshreea_/",
      },
    },
    {
      id: 4,
      name: "Usha Kiran Adhikari",
      position: "Event Manager",
      bio: "Plans and executes events that foster learning, collaboration, and growth.",
      photo: "/images/Committee/Usha.jpg",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 5,
      name: "Nikita Pradhan",
      position: "Finance Manager",
      bio: "Manages financial planning, budgeting, and sponsorships for sustainability.",
      photo: "/images/Committee/Nikita.jpg",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 6,
      name: "Rittika Parajuli",
      position: "Public Relations Manager",
      bio: "Builds connections with partners and promotes the organization’s vision to the public.",
      photo: "/images/Committee/Rittika.jpg",
      social: {
        facebook: "https://www.facebook.com/rittika.parajuli.96",
        linkedin: "https://www.linkedin.com/in/rittika-parajuli-60045024a/",
        instagram: "https://www.instagram.com/rittiks.aa/",
      },
    },
    {
      id: 7,
      name: "Saaya Parajuli",
      position: "Public Relations Manager",
      bio: "Strengthens outreach by cultivating relationships with institutions and collaborators.",
      photo: "/images/Committee/Saaya.jpg",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 8,
      name: "Niharika Bhattarai",
      position: "Social Media Manager",
      bio: "Leads digital engagement, shaping the organization’s online identity and campaigns.",
      photo: "/images/Committee/Niharika.jpg",
      social: { linkedin: "#", instagram: "#", github: "#" },
    },
    {
      id: 9,
      name: "Srijana Pant",
      position: "Social Media Manager",
      bio: "Creating engaging content for various platforms and publications.",
      photo: "/images/Committee/Srijana.jpg",
      social: {
        facebook: "https://www.facebook.com/srijusabbu.pant",
        linkedin:
          "https://www.linkedin.com/in/srijana-pant-0224b0386/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B2gGanc%2F1SnukiunySSsMCA%3D%3D",
        instagram: "https://www.instagram.com/srijanapant_11/?hl=en#",
      },
    },
    {
      id: 10,
      name: "Anuja Gyawali",
      position: "Technical Manager",
      bio: "Leads the tech wing, mentoring members and overseeing innovative tech projects.",
      photo: "/images/Committee/Anuja.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/anuja-gyawali-39ba0a266/",
      },
    },
    {
      id: 11,
      name: "Sachita Aryal",
      position: "Technical Manager",
      bio: "Oversees design quality and ensures visual consistency across platforms.",
      photo: "/images/Committee/Sachita.jpg",
      social: { facebook: "https://www.facebook.com/sachita.aryal.7" },
    },
    {
      id: 12,
      name: "Sadina Upreti",
      position: "Technical Manager",
      bio: "Brings creative concepts to life through innovative digital designs.",
      photo: "/images/Committee/Sadina.jpg",
      social: { facebook: "https://www.facebook.com/sadina.upreti.7" },
    },
    {
      id: 13,
      name: "Anshu Subedi",
      position: "Vice_Secretary",
      bio: "Assists in documentation, coordination, and ensures consistent team communication.",
      photo: "/images/Committee/Anshu.jpg",
      social: { linkedin: "#" },
    },
    {
      id: 14,
      name: "Pratistha Shrestha",
      position: "Event Coordinator",
      bio: "Supports event execution and ensures interactive, inclusive participation.",
      photo: "/images/Committee/Pratistha.jpg",
      social: {
        facebook: "https://www.facebook.com/pratistha.shrestha.5055/",
        instagram:
          "https://www.instagram.com/pratistha_shrest?igsh=MTc2cms2czZ1d3FlNQ==",
      },
    },
    {
      id: 15,
      name: "Tika Rijal",
      position: "Event Coordinator",
      bio: "Coordinates logistics and collaborates with teams to deliver successful events.",
      photo: "/images/Committee/Tika.jpg",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 16,
      name: "Swastika Lamichhane",
      position: "Event Coordinator",
      bio: "Organizes volunteer initiatives and community engagement programs.",
      photo: "/images/Committee/SwastikaL.jpg",
      social: {
        facebook: "https://www.facebook.com/swostika.lamichhane.982",
        instagram: "https://www.instagram.com/swastikalamichhane5/",
      },
    },
    {
      id: 17,
      name: "Sambriddhi Bhattarai",
      position: "Finance Coordinator",
      bio: "Assists in budgeting, fundraising, and sponsorship management for activities.",
      photo: "/images/Committee/Sambriddhi.jpg",
      social: { linkedin: "#" },
    },
    {
      id: 18,
      name: "Samrachana Sharma",
      position: "Social Media Coordinator",
      bio: "Creates, curates, and schedules posts that highlight our initiatives.",
      photo: "/images/Committee/Samrachana.webp",
      social: { facebook: "https://www.facebook.com/samrachana.sharma.184" },
    },
    {
      id: 19,
      name: "Swechchha Pokhrel",
      position: "Social Media Coordinator",
      bio: "Manages content calendars and posts engaging visuals that enhance our online presence.",
      photo: "/images/Committee/Swechchha.jpg",
      social: {
        facebook: "https://facebook.com/swechchhapokhrel",
        instagram: "https://www.instagram.com/swech_chha0/#",
      },
    },
    {
      id: 20,
      name: "Anshu Sharma",
      position: "Public Relations Coordinator",
      bio: "Assists in outreach campaigns and ensures strong community representation.",
      photo: "/images/Committee/AnshuSha.jpg",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 21,
      name: "Prayusha Pokhrel",
      position: "Public Relations Coordinator",
      bio: "Manages partnerships and contributes to relationship-building initiatives.",
      photo: "/images/Committee/Prayusha.jpg",
      social: { linkedin: "#" },
    },
    {
      id: 22,
      name: "Anjila Bashyal",
      position: "Technical Coordinator",
      bio: "Designs event visuals and assists in maintaining the brand’s creative identity.",
      photo: "/images/Committee/Anjila.jpg",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 23,
      name: "Grishma Sitaula",
      position: "Technical Coordinator",
      bio: "Creates graphic materials and supports multimedia design projects.",
      photo: "/images/Committee/Grishma.jpg",
      social: { linkedin: "#" },
    },
    {
      id: 24,
      name: "Komal Kushwaha",
      position: "Technical Coordinator",
      bio: "Assists in designing posters, banners, and digital visuals for events.",
      photo: "/images/Committee/Komal.jpg",
      social: { instagram: "#" },
    },
  ];

  return (
    <div id="Committee" className="container">
      <div className="container-header">
        <h1>Meet Our Committee</h1>
      </div>

      <div className="committee-container">
        {/* Members Grid */}
        <div className="committee-grid">
          {committeeMembers.map((member) => (
            <div key={member.id} className="member-card">
              <div className="member-photo">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="photo-fallback" style={{ display: "none" }}>
                  <FontAwesomeIcon icon={faUser} className="placeholder-icon" />
                </div>
              </div>

              <h3 className="member-name">{member.name}</h3>
              <p className="member-position">{member.position}</p>
              <p className="member-department">{member.department}</p>

              <div className="member-bio">{member.bio}</div>

              <div className="member-social">
                {member.social.facebook && (
                  <a
                    href={member.social.facebook}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Committee;
