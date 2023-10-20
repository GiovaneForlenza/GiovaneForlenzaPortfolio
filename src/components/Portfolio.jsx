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
      className="w-full px-3 py-8 flex items-center bg-gradient-to-b from-black to-gray-800  text-white sm:px-10 "
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
                className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-600"
                key={id}
              >
                <img src={project.photo} alt="" className="rounded-t-lg" />

                <div className="px-4 py-4">
                  <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.title}
                  </div>
                  <div className="">
                    {project.tags.map((tag, id) => {
                      return (
                        <div
                          className="inline-block rounded-full  text-xs font-semibold mr-2 mb-2 p-[2px] dark:text-white bg-gradient-to-r from-blue-800 to-indigo-900"
                          key={id}
                        >
                          <div className="h-full w-full py-1 px-4 rounded-full bg-gray-900">
                            {tag}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
                      className="inline-flex items-center px-4 py-2 mb-4 xs:mb-0 xs:mr-6 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg duration-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                    >
                      View Code
                    </a>
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 mb-4 xs:mb-0 xs:mr-6 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg duration-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
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
