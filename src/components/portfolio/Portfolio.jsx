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

import "../../scroll-animation.css";

function Portfolio({ isWebsiteEnglish }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    isWebsiteEnglish ? setProjects(PROJECTS_EN) : setProjects(PROJECTS_BR);
  }, [isWebsiteEnglish]);

  return (
    <div
      className="flex w-full items-center bg-bg-light px-3 py-8  dark:bg-gradient-to-b dark:from-bg-dark dark:to-secondary-dark   sm:p-10 sm:py-20"
      name="portfolio"
      id="portfolio"
    >
      <div className="mx-auto max-w-6xl">
        <div className="scroll-animation">
          <p className="inline border-b-4 border-b-accent-light text-4xl font-bold dark:border-b-accent-dark ">
            {isWebsiteEnglish
              ? getTitleFromScript(
                  WEBSITE_LANGUAGES.ENGLISH,
                  ENGLISH_SECTIONS.PORTFOLIO,
                )
              : getTitleFromScript(
                  WEBSITE_LANGUAGES.PORTUGUESE,
                  BR_SECTIONS.PORTFOLIO,
                )}
          </p>
          <p className="my-8 text-xl ">
            {isWebsiteEnglish
              ? getTextFromScript(
                  WEBSITE_LANGUAGES.ENGLISH,
                  ENGLISH_SECTIONS.PORTFOLIO,
                )
              : getTextFromScript(
                  WEBSITE_LANGUAGES.PORTUGUESE,
                  BR_SECTIONS.PORTFOLIO,
                )}
          </p>
        </div>
        {projects.map((project, id) => {
          return (
            <section
              className="scroll-animation my-10 rounded-md border border-gray-300 bg-white dark:border-none dark:bg-gray-900"
              key={id}
            >
              <div
                className={`mx-auto flex max-w-screen-xl flex-col px-4 py-4 shadow-sm  lg:flex-row  ${
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
