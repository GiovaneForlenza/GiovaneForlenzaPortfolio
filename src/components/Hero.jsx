import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Hero() {
  return (
    <div className="w-full flex flex-col items-center justify-center h-full bg-gradient-to-b from-black via-black to-gray-800 px-3 sm:px-10 md:flex-row">
      <div className="flex flex-col justify-center max-w-4xl">
        <h2 className="text-5xl sm:text-7xl font-bold">
          I'm a Front End Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum fuga
          odit! Cum tempore voluptas dolorum quisquam! Itaque consequuntur
          veniam reiciendis quos ullam laborum, inventore expedita. Natus
          repudiandae ad quidem!
        </p>
        <div className="">
          <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
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

export default Hero