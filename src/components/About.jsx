import React, { useEffect } from "react";
import {
  BR_SECTIONS,
  ENGLISH_SECTIONS,
  WEBSITE_LANGUAGES,
  getTextFromScript,
  getTitleFromScript,
} from "./WebsiteTexts";

function About({ isWebsiteEnglish }) {
  useEffect(() => {}, [isWebsiteEnglish]);

  return (
    <div
      className="md:w-full px-3 md:h-screen flex items-center bg-bg-light dark:bg-gradient-to-t dark:from-bg-dark  dark:to-secondary-dark sm:px-10"
      name="about"
    >
      <div className="max-w-4xl mx-auto ">
        <div className="pb-2">
          <p className="text-text-light text-4xl font-bold inline border-b-4 border-b-accent-light dark:text-text-dark">
            {isWebsiteEnglish &&
              getTitleFromScript(
                WEBSITE_LANGUAGES.ENGLISH,
                ENGLISH_SECTIONS.ABOUT,
              )}
            {!isWebsiteEnglish &&
              getTitleFromScript(
                WEBSITE_LANGUAGES.PORTUGUESE,
                BR_SECTIONS.SOBRE,
              )}
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
