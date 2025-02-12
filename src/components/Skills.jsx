import React, { useEffect, useState } from "react";
import "../scroll-animation.css";
import css from "../assets/skills/css.png";
import html from "../assets/skills/html.png";
import js from "../assets/skills/javascript.png";
import nextjs from "../assets/skills/nextjs.png";
import node from "../assets/skills/node.png";
import react from "../assets/skills/react.png";
import sass from "../assets/skills/sass.png";
import tailwind from "../assets/skills/tailwind.png";
import typescript from "../assets/skills/typescript.png";

function Skills({ isWebsiteEnglish }) {
  const skillsImgs = [
    react,
    typescript,
    nextjs,
    tailwind,
    sass,
    node,
    html,
    css,
    js,
  ];

  useEffect(() => {
    console.log(skillsImgs);
  }, []);

  return (
    <div
      className="pb-20 md:w-full px-3 md:h-screen flex items-center bg-bg-light dark:bg-bg-dark sm:px-10 "
      name="skills"
      id="skills"
    >
      <div className="max-w-4xl mx-auto scroll-animation">
        <div className="pb-10">
          <p className="text-text-light text-4xl font-bold inline border-b-4 border-b-accent-light dark:text-text-dark dark:border-b-accent-dark">
            Skills
          </p>
        </div>
        <div className="flex items-center flex-wrap gap-4">
          {skillsImgs.map((skill) => {
            return (
              <div className="w-20 hover:scale-105 transition-all">
                <img src={skill} alt="a" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
