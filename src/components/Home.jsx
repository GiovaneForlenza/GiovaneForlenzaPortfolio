import React from "react";
import About from "./About";
import Hero from "./Hero";
import Portfolio from "./portfolio/Portfolio";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full text-text-light dark:text-text-dark "
    >
      <Hero />
      <About />
      <Portfolio />
    </div>
  );
}

export default Home;
