import React from "react";
import About from "./About";
import Hero from "./Hero";
import Portfolio from "./Portfolio";

function Home() {
  return (
    <div name="home" className="h-screen w-full text-white ">
      <Hero />
      <About />
      <Portfolio />
    </div>
  );
}

export default Home;
