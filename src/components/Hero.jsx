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
    <div
      id="home"
      className="flex flex-col items-center justify-center h-full  bg-bg-light  dark:from-bg-dark  dark:bg-gradient-to-b dark:to-secondary-dark px-3 sm:px-10  lg:flex-row md:w-full"
    >
      <div className="flex flex-col justify-center max-w-4xl">
        <h2 className="text-center sm:text-left text-text-light text-4xl mb-2 sm:text-6xl md:text-left font-bold font-terminal dark:text-white">
          I'll be your <br className="hidden sm:flex md:hidden" />
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
          <a
            className="group flex items-center button px-5 py-3 mr-4 bg-accent-light dark:bg-blue-600 rounded-lg cursor-pointer select-none lg:active:translate-y-1  lg:active:[box-shadow:0_0px_0_0_#1E40AF,0_0px_0_0_#1b70f841] lg:active:border-b-[0px] transition-all duration-100 [box-shadow:0_5px_0_0_#321268] dark:[box-shadow:0_5px_0_0_#1E40AF] border-b-[1px] border-accent-light dark:border-blue-500 text-white text-md"
            href="#portfolio"
          >
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
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
