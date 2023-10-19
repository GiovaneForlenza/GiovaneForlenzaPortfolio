import React from "react";

function Portfolio() {
  return (
    <div
      className="w-full px-3 h-screen flex items-center bg-gradient-to-b  from-black to-gray-800  text-white sm:px-10"
      name="portfolio"
    >
      <div className="max-w-6xl mx-auto">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-b-gray-500">
            Portfolio
          </p>
          <p className="text-xl my-8 ">Check out some of my work right here</p>
        </div>
        <div className="grid gap-8 px-12 sm:grid-cols-2 sm:px-0 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((id) => {
            return (
              <div
                className="shadow-md shadow-gray-600 rounded-lg  cursor-pointer"
                key={id}
              >
                <img
                  src="src\assets\portfolio\reactWeather.jpg"
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 cursor-pointer border rounded-md hover:scale-105 ">
                    <a href="">View Demo</a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 cursor-pointer border rounded-md hover:scale-105 ">
                    <a href="">View Code</a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
