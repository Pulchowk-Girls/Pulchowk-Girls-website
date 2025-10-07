import React from "react";
import "../styles/Committee.css";
import {
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
      bio: "Leading the organization with passion and dedication to empowering women in tech.",
      photo: "/images/Committee/Sujita.jpg",
      social: { linkedin: "#", github: "#", instagram: "#" },
    },
    {
      id: 2,
      name: "Anupa Ranabhat",
      position: "Secretary",
      bio: "Supporting strategic initiatives and fostering inclusive community growth.",
      photo: "/images/Committee/Anupa.jpg",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 3,
      name: "Swastika Acharya",
      position: "Event Manager",
      bio: "Managing organizational communications and maintaining official records.",
      photo: "/images/Committee/Swastika.jpg",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 4,
      name: "Usha Kiran Adhikari",
      position: "Event Manager",
      bio: "Overseeing financial planning and budget management for all activities.",
      photo: "/images/Committee/Usha.jpg",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 5,
      name: "Nikita Pradhan",
      position: "Finance Manager",
      bio: "Organizing engaging events and workshops for skill development.",
      photo: "/images/Committee/Nikita.jpg",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 6,
      name: "Rittika Parajuli",
      position: "Public Relations Manager",
      bio: "Designing and conducting technical workshops for members.",
      photo: "/images/Committee/Rittika.jpg",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 7,
      name: "Saaya Parajuli",
      position: "Public Relations Manager",
      bio: "Building partnerships with industry leaders and academic institutions.",
      photo: "/images/Committee/Saaya.jpg",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 8,
      name: "Niharika Bhattarai",
      position: "Social Media Manager",
      bio: "Managing online presence and digital marketing strategies.",
      photo: "/images/Committee/Niharika.jpg",
      social: { linkedin: "#", instagram: "#", github: "#" },
    },
    {
      id: 9,
      name: "Srijana Pant",
      position: "Social Media Manager",
      bio: "Creating engaging content for various platforms and publications.",
      photo: "/images/Committee/Srijana.jpg",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 10,
      name: "Anuja Gyawali",
      position: "Technical Manager",
      bio: "Leading technical projects and mentoring junior developers.",
      photo: "/images/Committee/Anuja.jpg",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 11,
      name: "Sachita Aryal",
      position: "Technical Manager",
      bio: "Developing and maintaining organizational web platforms.",
      photo: "/images/Committee/Sachita.jpg",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 12,
      name: "Sadina Upreti",
      position: "Technical Manager",
      bio: "Analyzing data to drive informed decision-making processes.",
      photo: "/images/Committee/Sadina.jpg",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 13,
      name: "Anshu Subedi",
      position: "Vice_Secretary",
      bio: "Coordinating research initiatives and academic collaborations.",
      photo: "/images/Committee/Anshu.jpg",
      social: { linkedin: "#" },
    },
    {
      id: 14,
      name: "Pratistha Shrestha",
      position: "Event Coordinator",
      bio: "Developing mentorship programs for student success.",
      photo: "/images/Committee/Pratistha.jpg",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 15,
      name: "Tika Rijal",
      position: "Event Coordinator",
      bio: "Building and nurturing our supportive community network.",
      photo: "/images/Committee/Tika.jpg",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 16,
      name: "Swastika Lamichhane",
      position: "Event Coordinator",
      bio: "Organizing volunteer opportunities and community service projects.",
      photo: "/images/Committee/SwastikaL.jpg",
      social: { linkedin: "#" },
    },
    {
      id: 17,
      name: "Sambriddhi Bhattarai",
      position: "Finance Coordinator",
      bio: "Securing sponsorships and managing corporate partnerships.",
      photo: "/images/Committee/Sambriddhi.jpg",
      social: { linkedin: "#" },
    },
    {
      id: 18,
      name: "Samrachana Sharma",
      position: "Social Media Coordinator",
      bio: "Maintaining connections with alumni and expanding network.",
      photo: "/images/Committee/Samrachana.webp",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 19,
      name: "Swechchha Pokhrel",
      position: "Social Media Coordinator",
      bio: "Leading design initiatives and visual brand development.",
      photo: "/images/Committee/Swechchha.jpg",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 20,
      name: "Anshu Sharma",
      position: "Public Relations Coordinator",
      bio: "Creating visual content and marketing materials.",
      photo: "/images/Committee/AnshuSha.jpg",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 21,
      name: "Prayusha Pokhrel",
      position: "Public Relations Coordinator",
      bio: "Managing organizational projects and coordinating teams.",
      photo: "/images/Committee/Prayusha.jpg",
      social: { linkedin: "#" },
    },
    {
      id: 22,
      name: "Anjila Bashyal",
      position: "Technical Coordinator",
      bio: "Ensuring quality standards in all organizational deliverables.",
      photo: "/images/Committee/Anjila.jpg",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 23,
      name: "Grishma Sitaula",
      position: "Technical Coordinator",
      bio: "Managing documentation and knowledge sharing initiatives.",
      photo: "/images/Committee/Grishma.jpg",
      social: { linkedin: "#" },
    },
    {
      id: 24,
      name: "Komal Kushwaha",
      position: "Technical Coordinator",
      bio: "Supporting event planning and execution activities.",
      photo: "/images/Committee/Komal.jpg",
      social: { instagram: "#" },
    },
  ];

  return (
    <div className="container">
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
