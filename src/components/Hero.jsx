import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  BR_SECTIONS,
  ENGLISH_SECTIONS,
  TEXT_ENGLISH,
  WEBSITE_LANGUAGES,
  getTextFromScript,
} from "./WebsiteTexts";

function Hero({ isWebsiteEnglish }) {
  const [heroText, setHeroText] = useState(null);

  useEffect(() => {
    let text;
    if (isWebsiteEnglish) {
      text = getTextFromScript(
        WEBSITE_LANGUAGES.ENGLISH,
        ENGLISH_SECTIONS.HERO,
      );
    } else {
      text = getTextFromScript(WEBSITE_LANGUAGES.PORTUGUESE, BR_SECTIONS.HERO);
    }
    setHeroText(text);
  }, [isWebsiteEnglish]);

  return (
    <div className="flex flex-col items-center justify-center h-full  bg-bg-light  dark:from-bg-dark  dark:bg-gradient-to-b dark:to-secondary-dark px-3 sm:px-10  lg:flex-row md:w-full sm:pt-40">
      <div className="flex flex-col justify-center max-w-3xl mr-6">
        <h2 className="text-center text-text-light text-4xl mb-2 sm:text-6xl md:text-left font-bold font-terminal dark:text-white">
          I'm a{" "}
          <span className=" text-accent-light dark:text-accent-dark font-extrabold sm:text-8xl">
            Front End{" "}
          </span>
          React Developer
        </h2>

        {heroText &&
          heroText.map((text, id) => {
            return (
              <p
                className="text-center text-gray-500 py-1 max-w-4xl sm:text-xl md:text-left  w-full"
                key={id}
              >
                {text}
              </p>
            );
          })}
        <div className="flex items-center justify-center md:justify-start mt-5">
          <button className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-secondary-light bg-primary-light dark:bg-accent-light font-semibold">
            {isWebsiteEnglish &&
              getTextFromScript(
                WEBSITE_LANGUAGES.ENGLISH,
                ENGLISH_SECTIONS.PORTFOLIO_BTN,
              )}
            {!isWebsiteEnglish &&
              getTextFromScript(
                WEBSITE_LANGUAGES.PORTUGUESE,
                BR_SECTIONS.PORTFOLIO_BTN,
              )}
            <span className="group-hover:rotate-90 duration-300 ml-1">
              <MdOutlineKeyboardArrowRight size={25} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
