import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import {
  BR_SECTIONS,
  ENGLISH_SECTIONS,
  WEBSITE_LANGUAGES,
  getTextFromScript,
} from "./WebsiteTexts";
function NavBar({ isWebsiteEnglish, setIsWebsiteEnglish }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [themeDark, setThemeDark] = useState(true);
  const [links, setLinks] = useState([]);

  function handleThemeChange() {
    setThemeDark(!themeDark);
  }

  useEffect(() => {
    if (themeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeDark]);

  useEffect(() => {
    if (isWebsiteEnglish)
      setLinks(
        getTextFromScript(
          WEBSITE_LANGUAGES.ENGLISH,
          ENGLISH_SECTIONS.NAVIGATION,
        ),
      );
    else
      setLinks(
        getTextFromScript(WEBSITE_LANGUAGES.PORTUGUESE, BR_SECTIONS.NAVEGACAO),
      );
  }, [isWebsiteEnglish]);
  const namesOfSectionsIds = ["#home", "#about", "#skills", "#portfolio"];
  return (
    <div className="bg-secondary border-primary fixed z-10 flex w-full  select-none items-center justify-between border-b bg-bg-light px-4 py-2 text-text-light dark:bg-bg-dark dark:text-text-dark">
      <div className="cursor-pointer p-2 ">
        <a href="#">
          <h1 className="ml-2 font-terminal text-xl  sm:text-2xl md:text-5xl">
            <span className="font-semibold text-accent-light dark:text-accent-dark">
              {"<"}
            </span>
            Giovane Forlenza
            <span className="font-semibold text-accent-light dark:text-accent-dark">
              {" />"}
            </span>
          </h1>
        </a>
      </div>
      <div className="flex items-center">
        <ul className="hidden lg:flex">
          {links.map((link, id) => {
            return (
              <a
                className="mx-2 cursor-pointer px-4  font-semibold capitalize duration-200 hover:scale-105 hover:text-accent-light dark:hover:text-accent-dark"
                key={id}
                linkId={id}
                href={namesOfSectionsIds[id]}
              >
                {link}
              </a>
            );
          })}
          <button
            className="hover:text-accent px-4 duration-300"
            onClick={handleThemeChange}
          >
            {themeDark ? (
              <BsFillSunFill size={25} className="-translate-x-1" />
            ) : (
              <BsMoonFill size={25} />
            )}
          </button>
          <button
            className="px-5 text-lg font-semibold"
            onClick={() => setIsWebsiteEnglish(!isWebsiteEnglish)}
            data-tooltip-id="language-tooltip"
            data-tooltip-content="Change the website language (BR or EN)"
          >
            {isWebsiteEnglish ? "PT-BR" : "EN"}
          </button>
        </ul>
        <div
          className="z-10 mr-2 inline-block cursor-pointer p-2 text-text-light  duration-200 dark:text-white lg:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {isNavOpen && (
        <ul className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-bg-light text-text-light dark:bg-gradient-to-b dark:from-black dark:to-gray-800 dark:text-text-dark lg:hidden">
          {links.map((link, id) => {
            return (
              <a
                className=" cursor-pointer px-4 py-3 text-4xl capitalize duration-200  "
                key={id}
                href={namesOfSectionsIds[id]}
                onClick={() => setIsNavOpen(false)}
              >
                {link}
              </a>
            );
          })}
          <div className="flex flex-col items-center justify-center">
            <button
              className="hover:text-accent mb-2 p-2 duration-300"
              onClick={handleThemeChange}
            >
              {themeDark ? (
                <BsFillSunFill size={25} className="" />
              ) : (
                <BsMoonFill size={25} />
              )}
            </button>
            <button
              className="mb p-2  text-lg font-semibold"
              onClick={() => setIsWebsiteEnglish(!isWebsiteEnglish)}
              // data-tooltip-id="language-tooltip"
              // data-tooltip-content="Change the website language (BR or EN)"
            >
              {isWebsiteEnglish ? "PT-BR" : "EN"}
            </button>
          </div>
        </ul>
      )}
      <Tooltip id="language-tooltip" />
      <Tooltip id="theme-tooltip" />
    </div>
  );
}

export default NavBar;
