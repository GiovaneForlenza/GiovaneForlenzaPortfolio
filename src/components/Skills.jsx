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

  // useEffect(() => {
  //   console.log(skillsImgs);
  // }, []);

  return (
    <div
      className="flex items-center bg-bg-light px-3 pb-20 dark:bg-bg-dark sm:p-10 sm:py-20  md:h-screen md:w-full"
      name="skills"
      id="skills"
    >
      <div className="scroll-animation mx-auto max-w-4xl">
        <div className="pb-10">
          <p className="inline border-b-4 border-b-accent-light text-4xl font-bold text-text-light dark:border-b-accent-dark dark:text-text-dark">
            Skills
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {skillsImgs.map((skill) => {
            return (
              <div className="w-20 transition-all hover:scale-105">
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
