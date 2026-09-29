import css from "../assets/skills/css.png";
import html from "../assets/skills/html.png";
import js from "../assets/skills/javascript.png";
import react from "../assets/skills/react.png";
import sass from "../assets/skills/sass.png";
import tailwind from "../assets/skills/tailwind.png";
import typescript from "../assets/skills/typescript.png";
import SectionTitle from "./SectionTitle";
import { getSection } from "./WebsiteTexts";

const SKILLS = [
  { name: "React", img: react },
  { name: "TypeScript", img: typescript },
  { name: "Tailwind CSS", img: tailwind },
  { name: "Sass", img: sass },
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: js },
];

function Skills({ isWebsiteEnglish }) {
  const { title, text } = getSection(isWebsiteEnglish, "skills");

  return (
    <section id="skills" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle title={title} subtitle={text} />
        <ul className="scroll-animation grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {SKILLS.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col items-center gap-3 rounded-xl border border-line bg-canvas px-4 py-6"
            >
              <img
                src={skill.img}
                alt=""
                className="h-12 w-12 object-contain"
              />
              <span className="text-sm font-semibold text-ink">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
