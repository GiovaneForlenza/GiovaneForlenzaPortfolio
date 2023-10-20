import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Hero() {
  return (
    <div className="sm:px-10 md:flex-row md:w-full flex flex-col items-center justify-center h-full bg-gradient-to-b from-bg-dark  to-secondary px-3">
      <div className="flex flex-col justify-center max-w-4xl">
        <h2 className="text-5xl sm:text-7xl font-bold font-code">
          I'm a{" "}
          <span className="text-accent font-extrabold sm:text-8xl">
            Front End{" "}
          </span>
          Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-4xl sm:text-xl w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum fuga
          odit! Cum tempore voluptas dolorum quisquam! Itaque consequuntur
          veniam reiciendis quos ullam laborum, inventore expedita. Natus
          repudiandae ad quidem!
        </p>
        <div className="">
          <button className="group text-secondary w-fit px-6 py-3 my-2 flex items-center rounded-md bg-primary">
            Portfolio
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
