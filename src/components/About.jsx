import React, { useEffect, useState } from "react";
import {
  BR_SECTIONS,
  ENGLISH_SECTIONS,
  WEBSITE_LANGUAGES,
  getTextFromScript,
  getTitleFromScript,
} from "./WebsiteTexts";
import "../scroll-animation.css";

function About({ isWebsiteEnglish }) {
  const [arrayText, setArrayText] = useState([]);
  useEffect(() => {
    if (isWebsiteEnglish)
      setArrayText(
        getTextFromScript(WEBSITE_LANGUAGES.ENGLISH, ENGLISH_SECTIONS.ABOUT),
      );
    else
      setArrayText(
        getTextFromScript(WEBSITE_LANGUAGES.PORTUGUESE, BR_SECTIONS.SOBRE),
      );
  }, [isWebsiteEnglish]);

  return (
    <div
      className="lg:pb-20 md:w-full px-3 md:h-screen flex items-center bg-bg-light dark:bg-gradient-to-t dark:from-bg-dark  dark:to-secondary-dark sm:p-10 sm:py-20 "
      name="about"
      id="about"
    >
      <div className="max-w-4xl mx-auto scroll-animation">
        <div className="pb-10">
          <p className="text-text-light text-4xl font-bold inline border-b-4 border-b-accent-light dark:text-text-dark dark:border-b-accent-dark">
            {isWebsiteEnglish
              ? getTitleFromScript(
                  WEBSITE_LANGUAGES.ENGLISH,
                  ENGLISH_SECTIONS.ABOUT,
                )
              : getTitleFromScript(
                  WEBSITE_LANGUAGES.PORTUGUESE,
                  BR_SECTIONS.SOBRE,
                )}
          </p>
        </div>
        <div className="">
          {arrayText.map((text, id) => {
            return (
              <p className="sm:text-xl mt-2" key={id}>
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
