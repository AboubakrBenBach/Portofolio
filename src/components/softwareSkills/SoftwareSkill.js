import React from "react";
import "./SoftwareSkill.css";
import {skillsSection} from "../../portfolio";
import Button from "../../components/button/Button";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
               {/* <i className={skills.fontAwesomeClassname}></i> */}
                <button className="software-skill-button">{skills.skillName}</button>
          
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
