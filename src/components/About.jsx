import React from "react";
import { getTextFromScript } from "./TextsTranslations";

function About() {
  return (
    <div
      className="md:w-full px-3 md:h-screen flex items-center bg-bg-light dark:bg-gradient-to-t dark:from-bg-dark  dark:to-secondary-dark sm:px-10"
      name="about"
    >
      <div className="max-w-4xl mx-auto ">
        <div className="pb-2 mb-10">
          <p className="text-text-light text-4xl font-bold inline border-b-4 border-b-accent-light dark:text-text-dark">
            About Me
          </p>
        </div>
        <div className="">
          {getTextFromScript("English", "About")[0].text.map((script, id) => {
            return (
              <p className="sm:text-xl mt-5 sm:mt-5" key={id}>
                {script}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
