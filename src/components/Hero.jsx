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
      className="flex h-full flex-col items-center justify-center  bg-bg-light  px-3  dark:bg-gradient-to-b dark:from-bg-dark dark:to-secondary-dark sm:px-10  md:w-full lg:flex-row"
    >
      <div className="flex max-w-4xl flex-col justify-center">
        <h2 className="mb-2 text-center font-terminal text-4xl font-bold text-text-light dark:text-white sm:text-left sm:text-6xl md:text-left">
          I'll be your <br className="hidden sm:flex md:hidden" />
          <span className=" font-extrabold text-accent-light dark:text-accent-dark sm:text-8xl">
            Front End{" "}
          </span>
          React Developer
        </h2>

        {heroText &&
          heroText.map((text, id) => {
            return (
              <p
                className="w-full max-w-4xl py-1 text-center text-gray-500 sm:text-xl  md:text-left"
                key={id}
              >
                {text}
              </p>
            );
          })}
        <div className="mt-5 flex items-center justify-center md:justify-start">
          <a
            className="button text-md group mr-4 flex cursor-pointer select-none items-center rounded-lg border-b-[1px] border-accent-light bg-accent-light px-5  py-3 text-white transition-all duration-100 [box-shadow:0_5px_0_0_#321268] dark:border-blue-500 dark:bg-blue-600 dark:[box-shadow:0_5px_0_0_#1E40AF] lg:active:translate-y-1 lg:active:border-b-[0px] lg:active:[box-shadow:0_0px_0_0_#1E40AF,0_0px_0_0_#1b70f841]"
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
            <span className="ml-1 duration-300 group-hover:rotate-90">
              <MdOutlineKeyboardArrowRight size={25} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
