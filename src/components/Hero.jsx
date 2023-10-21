import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-full  bg-bg-light  dark:from-bg-dark  dark:bg-gradient-to-b dark:to-secondary-dark px-3 sm:px-10  lg:flex-row md:w-full sm:pt-40">
      <div className="flex flex-col justify-center max-w-3xl mr-6">
        <h2 className="text-white text-5xl sm:text-7xl font-bold font-code">
          I'm a{" "}
          <span className="text-accent-light dark:text-accent-dark font-extrabold sm:text-8xl">
            Front End{" "}
          </span>
          <br />
          React Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-4xl sm:text-xl w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum fuga
          odit! Cum tempore voluptas dolorum quisquam! Itaque consequuntur
          veniam reiciendis quos ullam laborum, inventore expedita. Natus
          repudiandae ad quidem!
        </p>
        <div className="">
          <button className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-secondary-light bg-primary-light dark:bg-primary-dark">
            Portfolio
            <span className="group-hover:rotate-90 duration-300 ml-1">
              <MdOutlineKeyboardArrowRight size={25} />
            </span>
          </button>
        </div>
      </div>
      {/* <div className="border h-96 w-80">a</div> */}
    </div>
  );
}

export default Hero;
