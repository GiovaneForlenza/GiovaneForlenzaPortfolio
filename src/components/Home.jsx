import React from "react";
import About from "./About";
import Hero from "./Hero";
import Portfolio from "./portfolio/Portfolio";

function Home({ isWebsiteEnglish, setIsWebsiteEnglish }) {
  return (
    <div
      name="home"
      className="h-screen w-full text-text-light dark:text-text-dark "
    >
      <Hero isWebsiteEnglish={isWebsiteEnglish} />
      <About isWebsiteEnglish={isWebsiteEnglish} />
      <Portfolio isWebsiteEnglish={isWebsiteEnglish} />
    </div>
  );
}

export default Home;
