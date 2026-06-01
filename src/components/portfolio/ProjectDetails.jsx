import React from "react";

import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
function ProjectDetails({ project, id, isWebsiteEnglish }) {
  return (
    <div
      className={`mt-4 flex grow-0 flex-col items-start justify-start lg:mt-0 lg:w-1/3 ${
        id % 2 === 1 ? "lg:ml-5" : "lg:mr-5"
      }`}
    >
      <div className="sm:mb-4">
        <h2 className="mb-2 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {project.title}
        </h2>
        <div className="mb-2 flex flex-wrap">
          {project.tags.map((tag, id) => {
            return (
              <div
                className="m-1 rounded-full border-2 border-primary-light px-3 font-semibold tracking-widest  dark:border-accent-dark dark:text-white"
                key={id}
              >
                {tag}
              </div>
            );
          })}
        </div>
        {project.description.map((text, id) => {
          return (
            <p
              className="mb-2 font-light text-gray-500 dark:text-gray-400 md:text-lg"
              key={id}
            >
              {text}
            </p>
          );
        })}
      </div>
      <div className="flex">
        {/* <a
          href={project.projectLink}
          target="_blank"
          className="inline-flex items-center mb-4 xs:mb-0 mr-3  font-medium text-bg-light bg-primary-light hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 rounded-lg text-sm px-4 py-2 text-center dark:bg-accent-dark dark:text-secondary-dark hover:-translate-y-0.5 duration-300"
        >
          Live demo
        </a> */}
        <a
          className="button text-md mr-4 flex cursor-pointer select-none items-center rounded-lg border-b-[1px] border-accent-light bg-accent-light  px-4 text-white transition-all duration-100 [box-shadow:0_5px_0_0_#321268] dark:border-blue-500 dark:bg-blue-600 dark:[box-shadow:0_5px_0_0_#1E40AF] lg:active:translate-y-1 lg:active:border-b-[0px] lg:active:[box-shadow:0_0px_0_0_#1E40AF,0_0px_0_0_#1b70f841]"
          href={project.projectLink}
          target="_blank"
        >
          Live demo
          <BiLinkExternal size={20} className="ml-3" />
        </a>
        <a
          href={project.codeLink}
          target="_blank"
          className="mb-4 inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 duration-300 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 xs:mb-0"
        >
          {isWebsiteEnglish && "Code"}
          {!isWebsiteEnglish && "Código"}
          <BsGithub size={20} className="ml-3" />
        </a>
      </div>
    </div>
  );
}

export default ProjectDetails;
