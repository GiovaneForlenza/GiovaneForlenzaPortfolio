import React from "react";
import weather from "../assets/portfolio/reactWeatherLookup.jpg";
import cocktail from "../assets/portfolio/cocktailSelection.jpg";
import recipeMenu from "../assets/portfolio/foodMenu.jpg";
import parkingLot from "../assets/portfolio/parkinglotControl.jpg";
import schoolManagement from "../assets/portfolio/schoolManagement.jpg";

function Portfolio() {
  const projects = [
    {
      title: "Weather Forecast",
      tags: ["React", "Tailwind", "API"],
      description: "",
      link: "https://weather-lookup-react.netlify.app",
      photo: weather,
    },
    {
      title: "Parking lot Control",
      tags: ["React", "Tailwind", "API", "Local Storage"],
      description: "",
      link: "https://parkinglot-control.netlify.app",
      photo: parkingLot,
    },
    {
      title: "School Management",
      tags: ["React", "Scss", "Local Storage"],
      description: "",
      link: "https://school-management-program.netlify.app",
      photo: schoolManagement,
    },
    {
      title: "Recipe Menu",
      tags: ["React", "Scss"],
      description: "",
      link: "https://recepie-book.netlify.app",
      photo: recipeMenu,
    },
    {
      title: "Cocktail Selection",
      tags: ["React", "Scss", "API"],
      description: "",
      link: "https://react-project-cocktaildb.netlify.app",
      photo: cocktail,
    },
  ];
  return (
    <div
      className="w-full px-3 py-8 flex items-center bg-gradient-to-b  from-black to-gray-800  text-white sm:px-10"
      name="portfolio"
    >
      <div className="max-w-6xl mx-auto">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-b-gray-500">
            Portfolio
          </p>
          <p className="text-xl my-8 ">Check out some of my work right here</p>
        </div>
        <div className="grid gap-8 px-8 md:grid-cols-2 sm:px-0 ">
          {projects.map((project, id) => {
            return (
              <div
                className="max-w-lg rounded overflow-hidden shadow-lg bg-white"
                key={id}
              >
                <img src={project.photo} alt="" className="" />

                <div className="px-4 py-4">
                  <div className="font-bold text-xl mb-1 text-black">
                    {project.title}
                  </div>
                  <div className="">
                    {project.tags.map((tag, id) => {
                      return (
                        <span
                          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
                          key={id}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                  <div className="flex mt-4 flex-col xs:flex-row md:mt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center px-4 py-2 mb-4 xs:mb-0 xs:mr-6 text-sm font-medium text-center text-white bg-blue-700 duration-300 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      View Live
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 mb-4 xs:mb-0 xs:mr-6 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 duration-300"
                    >
                      View Code
                    </a>
                    <button
                      type="button"
                      className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Project Info
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
