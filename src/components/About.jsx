import { useEffect, useState } from "react";
import "../scroll-animation.css";
import {
  BR_SECTIONS,
  ENGLISH_SECTIONS,
  WEBSITE_LANGUAGES,
  getTextFromScript,
  getTitleFromScript,
} from "./WebsiteTexts";

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
      className="flex items-center bg-bg-light px-3 dark:bg-gradient-to-t dark:from-bg-dark dark:to-secondary-dark sm:p-10 sm:py-20  md:h-screen md:w-full lg:pb-20 "
      name="about"
      id="about"
    >
      <div className="scroll-animation mx-auto max-w-4xl">
        <div className="pb-10">
          <p className="inline border-b-4 border-b-accent-light text-4xl font-bold text-text-light dark:border-b-accent-dark dark:text-text-dark">
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
              <p className="mt-2 sm:text-xl" key={id}>
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
