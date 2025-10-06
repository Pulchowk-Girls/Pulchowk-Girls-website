import React from "react";
import "../styles/Committee.css";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Committee() {
  // Sample committee members data
  const committeeMembers = [
    {
      id: 1,
      name: "Sujita Sharma",
      position: "President",
      bio: "Leading the organization with passion and dedication to empowering women in tech.",
      initials: "SS",
      social: { linkedin: "#", github: "#", instagram: "#" },
    },
    {
      id: 2,
      name: "Anupa Ranabhat",
      position: "Secretary",
      bio: "Supporting strategic initiatives and fostering inclusive community growth.",
      initials: "AR",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 3,
      name: "Swastika Acharya",
      position: "Event Manager",
      bio: "Managing organizational communications and maintaining official records.",
      initials: "SA",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 4,
      name: "Usha Kiran Adhikari",
      position: "Event Manager",
      bio: "Overseeing financial planning and budget management for all activities.",
      initials: "UK",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 5,
      name: "Nikita Pradhan",
      position: "Finance Manager",
      bio: "Organizing engaging events and workshops for skill development.",
      initials: "NP",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 6,
      name: "Rittika Parajuli",
      position: "Public Relations Manager",
      bio: "Designing and conducting technical workshops for members.",
      initials: "RP",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 7,
      name: "Saaya Parajuli",
      position: "Public Relations Manager",
      bio: "Building partnerships with industry leaders and academic institutions.",
      initials: "SP",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 8,
      name: "Niharika Bhattarai",
      position: "Social Media Manager",
      bio: "Managing online presence and digital marketing strategies.",
      initials: "NB",
      social: { linkedin: "#", instagram: "#", github: "#" },
    },
    {
      id: 9,
      name: "Srijana Pant",
      position: "Social Media Manager",
      bio: "Creating engaging content for various platforms and publications.",
      initials: "SP",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 10,
      name: "Anuja Gyawali",
      position: "Technical Manager",
      bio: "Leading technical projects and mentoring junior developers.",
      initials: "AG",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 11,
      name: "Sachita Aryal",
      position: "Technical Manager",
      bio: "Developing and maintaining organizational web platforms.",
      initials: "SA",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 12,
      name: "Sadina Upreti",
      position: "Technical Manager",
      bio: "Analyzing data to drive informed decision-making processes.",
      initials: "SU",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 13,
      name: "Anshu Subedi",
      position: "Vice_Secretary",
      bio: "Coordinating research initiatives and academic collaborations.",
      initials: "AS",
      social: { linkedin: "#" },
    },
    {
      id: 14,
      name: "Pratistha Shrestha",
      position: "Event Coordinator",
      bio: "Developing mentorship programs for student success.",
      initials: "PS",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 15,
      name: "Tika Rijal",
      position: "Event Coordinator",
      bio: "Building and nurturing our supportive community network.",
      initials: "TR",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 16,
      name: "Swastika Lamichhane",
      position: "Event Coordinator",
      bio: "Organizing volunteer opportunities and community service projects.",
      initials: "SL",
      social: { linkedin: "#" },
    },
    {
      id: 17,
      name: "Sambriddhi Bhattarai",
      position: "Finance Coordinator",
      bio: "Securing sponsorships and managing corporate partnerships.",
      initials: "SB",
      social: { linkedin: "#" },
    },
    {
      id: 18,
      name: "Samrachana Sharma",
      position: "Social Media Coordinator",
      bio: "Maintaining connections with alumni and expanding network.",
      initials: "SS",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 19,
      name: "Swechchha Pokhrel",
      position: "Social Media Coordinator",
      bio: "Leading design initiatives and visual brand development.",
      initials: "SP",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 20,
      name: "Anshu Sharma",
      position: "Public Relations Coordinator",
      bio: "Creating visual content and marketing materials.",
      initials: "AS",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 21,
      name: "Prayusha Pokhrel",
      position: "Public Relations Coordinator",
      bio: "Managing organizational projects and coordinating teams.",
      initials: "PP",
      social: { linkedin: "#" },
    },
    {
      id: 22,
      name: "Anjila Bashyal",
      position: "Technical Coordinator",
      bio: "Ensuring quality standards in all organizational deliverables.",
      initials: "AB",
      social: { linkedin: "#", github: "#" },
    },
    {
      id: 23,
      name: "Grishma Sitaula",
      position: "Technical Coordinator",
      bio: "Managing documentation and knowledge sharing initiatives.",
      initials: "GS",
      social: { linkedin: "#" },
    },
    {
      id: 24,
      name: "Komal Kushwaha",
      position: "Technical Coordinator",
      bio: "Supporting event planning and execution activities.",
      initials: "KK",
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
                {member.photo ? (
                  <img src={member.photo} alt={member.name} />
                ) : (
                  member.initials
                )}
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
