import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
function NavBar({ isWebsiteEnglish, setIsWebsiteEnglish }) {
  const links = ["Home", "About", "Portfolio", "Experience", "Contact"];
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [themeDark, setThemeDark] = useState(true);

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

  return (
    <div className="flex justify-between items-center w-full text-text-light bg-bg-light  dark:bg-bg-dark dark:text-text-dark fixed bg-secondary border-b border-primary px-4 py-2 select-none">
      <div className="p-2 cursor-pointer ">
        <a href="#">
          <h1 className="text-3xl  ml-2  md:text-6xl font-terminal">
            <span className="text-accent-light dark:text-accent-dark font-semibold">
              {"<"}
            </span>
            Giovane Forlenza
            <span className="text-accent-light dark:text-accent-dark font-semibold">
              {"/>"}
            </span>
          </h1>
        </a>
      </div>
      <div className="items-center flex">
        <ul className="hidden lg:flex">
          {links.map((link, id) => {
            return (
              <li
                className="px-4 cursor-pointer capitalize  hover:text-accent-light dark:hover:text-accent-dark hover:scale-105 duration-200 mx-2 font-semibold"
                key={id}
              >
                {link}
              </li>
            );
          })}
        </ul>{" "}
        <div
          className="lg:hidden inline-block cursor-pointer p-2 mr-2 z-10    duration-200"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
        <button
          className="px-4 hover:text-accent duration-300"
          onClick={handleThemeChange}
        >
          {themeDark ? (
            <BsFillSunFill size={25} className="-translate-x-1" />
          ) : (
            <BsMoonFill size={25} />
          )}
        </button>
        <button
          className="px-5 font-semibold text-lg"
          onClick={() => setIsWebsiteEnglish(!isWebsiteEnglish)}
        >
          {isWebsiteEnglish ? "BR" : "EN"}
        </button>
      </div>

      {isNavOpen && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 lg:hidden">
          {links.map((link, id) => {
            return (
              <li
                className=" px-4 cursor-pointer capitalize py-6 text-4xl duration-200  "
                key={id}
              >
                {link}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
