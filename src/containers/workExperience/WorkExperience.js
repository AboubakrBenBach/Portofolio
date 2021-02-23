import React, {useContext} from "react";
import "./WorkExperience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">

      <Fade bottom duration={1000} distance="20px">
      <div className="experience-container" id="workExperience">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading experience-heading"
                  : "heading experience-heading"
              }
            >
              Experiences
            </h1>
           
          </div>
          <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => {
              return (
                <ExperienceCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    company: card.company,                    
                    companylogo: card.companylogo,
                    role: card.role,
                    date: card.date,
                    desc: card.desc,
                    techno: card.techno
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>

      </div>
    );
  }
  return null;
}


   {/**   <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade> */}