import React from "react";

import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
function ProjectDetails({ project, id }) {
  return (
    <div
      className={`mt-4 md:mt-0 lg:w-1/3 h-full flex items-start flex-col justify-between ${
        id % 2 === 1 ? "lg:ml-5" : "lg:mr-5"
      }`}
    >
      <div className="sm:mb-4">
        <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {project.title}
        </h2>
        <div className="mb-2 flex flex-wrap">
          {project.tags.map((tag, id) => {
            return (
              <div
                className="border-2 border-primary-light dark:border-accent-dark dark:text-white font-semibold px-3 tracking-widest  m-1 rounded-full"
                key={id}
              >
                {tag}
              </div>
            );
          })}
        </div>
        <p className="font-light text-gray-500 md:text-lg dark:text-gray-400">
          Flowbite helps you connect with friends and communities of people who
          share your interests. Connecting with your friends and family as well
          as discovering new ones is easy with features like Groups.
        </p>
      </div>
      <div className="sm:mt-4">
        <a
          href={project.projectLink}
          target="_blank"
          className="inline-flex items-center mb-4 xs:mb-0 mr-3  font-medium text-bg-light bg-primary-light hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 rounded-lg text-sm px-4 py-2 text-center dark:bg-accent-dark dark:text-secondary-dark hover:-translate-y-0.5 duration-300"
        >
          Live demo <BiLinkExternal size={20} className="ml-3" />
        </a>
        <a
          href={project.codeLink}
          target="_blank"
          className="inline-flex items-center px-4 py-2 mb-4 xs:mb-0 xs:mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg duration-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
        >
          Code
          <BsGithub size={20} className="ml-3" />
        </a>
      </div>
    </div>
  );
}

export default ProjectDetails;
