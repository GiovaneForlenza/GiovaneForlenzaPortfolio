import React from "react";
import weather from "../../assets/portfolio/reactWeatherLookup.jpg";
import cocktail from "../../assets/portfolio/cocktailSelection.jpg";
import recipeMenu from "../../assets/portfolio/foodMenu.jpg";
import parkingLot from "../../assets/portfolio/parkinglotControl.jpg";
import schoolManagement from "../../assets/portfolio/schoolManagement.jpg";
import ProjectDetails from "./ProjectDetails";

function Portfolio() {
  const projects = [
    {
      title: "Weather Forecast",
      tags: ["React", "Tailwind", "API"],
      description: "",
      projectLink: "https://weather-lookup-react.netlify.app",
      codeLink: "",
      photo: weather,
    },
    {
      title: "Parking lot Control",
      tags: ["React", "Tailwind", "API", "Local Storage"],
      description: "",
      projectLink: "https://parkinglot-control.netlify.app",
      codeLink: "",
      photo: parkingLot,
    },
    {
      title: "School Management",
      tags: ["React", "Scss", "Local Storage"],
      description: "",
      projectLink: "https://school-management-program.netlify.app",
      codeLink: "",
      photo: schoolManagement,
    },
    {
      title: "Recipe Menu",
      tags: ["React", "Scss"],
      description: "",
      projectLink: "https://recepie-book.netlify.app",
      codeLink: "",
      photo: recipeMenu,
    },
    {
      title: "Cocktail Selection",
      tags: ["React", "Scss", "API"],
      description: "",
      projectLink: "https://react-project-cocktaildb.netlify.app",
      codeLink: "",
      photo: cocktail,
    },
  ];
  return (
    <div
      className="w-full px-3 py-8 flex items-center bg-slate-100 dark:bg-gradient-to-b dark:from-bg-dark dark:to-secondary-dark   sm:px-10 "
      name="portfolio"
    >
      <div className="max-w-6xl mx-auto">
        <div className="pb-2">
          <p className=" text-4xl font-bold inline border-b-4 dark:border-b-primary-light">
            Portfolio
          </p>
          <p className="text-xl my-8 ">Check out some of my work right here</p>
        </div>
        {projects.map((project, id) => {
          return (
            // Instead of having 2 build, make the container flex, and if even make flex-row-reverse
            <section
              className=" bg-white dark:bg-gray-900 my-10 rounded-md border dark:border-0 border-gray-300"
              key={id}
            >
              <div
                className={`flex flex-col overflow-hidden items-center py-4 px-4 mx-auto max-w-screen-xl lg:flex-row  shadow-sm  ${
                  id % 2 === 1 && "lg:flex-row-reverse"
                }`}
              >
                <ProjectDetails project={project} id={id} />
                <div className="mt-4 lg:mt-0 lg:w-2/3">
                  <a href={project.projectLink} target="_blank">
                    <img
                      className=" rounded-md"
                      src={project.photo}
                      alt="dashboard image"
                    />
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
