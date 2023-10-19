import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavBarLinks from "./NavBarLinks";

function NavBar() {
  const links = ["Home", "About", "Portfolio", "Experience", "Contact"];
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 select-none">
      <div className="p-2 cursor-pointer">
        <a href="#">
          <h1 className="text-4xl ml-2 font-signature md:text-5xl">
            Giovane Forlenza
          </h1>
        </a>
      </div>
      <ul className="hidden lg:flex">
        {links.map((link, id) => {
          return (
            <li
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 mx-2 hover:text-white"
              key={id}
            >
              {link}
            </li>
          );
        })}
      </ul>
      <div
        className="inline-block cursor-pointer p-2 mr-2 z-10 text-gray-500  hover:text-white duration-200 lg:hidden"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {isNavOpen && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 lg:hidden">
          {links.map((link, id) => {
            return (
              <li
                className=" px-4 cursor-pointer capitalize py-6 text-4xl duration-200 hover:text-white "
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
