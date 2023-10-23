import React from "react";
import { getTextFromScript } from "./TextsTranslations";

function About() {
  return (
    <div
      className="md:w-full px-3 md:h-screen flex items-center bg-bg-light dark:bg-gradient-to-t dark:from-bg-dark  dark:to-secondary-dark sm:px-10"
      name="about"
    >
      <div className="max-w-4xl mx-auto ">
        <div className="pb-2 ">
          <p className="text-text-light text-4xl font-bold inline border-b-4 border-b-accent-light dark:text-text-dark">
            About Me
          </p>
        </div>
        <div className="">
          <p className="sm:text-xl mt-10 sm:mt-20">
            {getTextFromScript("English", "About")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
