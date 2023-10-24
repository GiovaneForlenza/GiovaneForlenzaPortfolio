import React, { useEffect, useState } from "react";
import { PROJECTS_BR, PROJECTS_EN } from "./PortfolioProjects";
import ProjectDetails from "./ProjectDetails";
import {
  BR_SECTIONS,
  ENGLISH_SECTIONS,
  WEBSITE_LANGUAGES,
  getTextFromScript,
  getTitleFromScript,
} from "../WebsiteTexts";

function Portfolio({ isWebsiteEnglish }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    if (isWebsiteEnglish) setProjects(PROJECTS_EN);
    else setProjects(PROJECTS_BR);
  }, [isWebsiteEnglish]);

  return (
    <div
      className="w-full px-3 py-8 flex items-center bg-bg-light  dark:bg-gradient-to-b dark:from-bg-dark dark:to-secondary-dark   sm:px-10 "
      name="portfolio"
    >
      <div className="max-w-6xl mx-auto">
        <div className="pb-2">
          <p className=" text-4xl font-bold inline border-b-4 dark:border-b-primary-light">
            {isWebsiteEnglish &&
              getTitleFromScript(
                WEBSITE_LANGUAGES.ENGLISH,
                ENGLISH_SECTIONS.PORTFOLIO,
              )}
            {!isWebsiteEnglish &&
              getTitleFromScript(
                WEBSITE_LANGUAGES.PORTUGUESE,
                BR_SECTIONS.PORTFOLIO,
              )}
          </p>
          <p className="text-xl my-8 ">
            {isWebsiteEnglish &&
              getTextFromScript(
                WEBSITE_LANGUAGES.ENGLISH,
                ENGLISH_SECTIONS.PORTFOLIO,
              )}
            {!isWebsiteEnglish &&
              getTextFromScript(
                WEBSITE_LANGUAGES.PORTUGUESE,
                BR_SECTIONS.PORTFOLIO,
              )}
          </p>
        </div>
        {projects.map((project, id) => {
          return (
            <section
              className=" bg-white dark:bg-gray-900 my-10 rounded-md border dark:border-0 border-gray-300"
              key={id}
            >
              <div
                className={`flex flex-col overflow-hidden items-center py-4 px-4 mx-auto max-w-screen-xl lg:flex-row  shadow-sm  ${
                  id % 2 === 0 && "lg:flex-row-reverse"
                }`}
              >
                <div className="mt-4 lg:mt-0 lg:w-2/3">
                  <a href={project.projectLink} target="_blank">
                    <img
                      className=" rounded-md"
                      src={project.photo}
                      alt="dashboard image"
                    />
                  </a>
                </div>
                <ProjectDetails
                  project={project}
                  id={id}
                  isWebsiteEnglish={isWebsiteEnglish}
                />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
