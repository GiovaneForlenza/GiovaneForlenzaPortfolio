import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { getSection } from "../WebsiteTexts";

function ProjectDetails({ project, isWebsiteEnglish }) {
  const labels = getSection(isWebsiteEnglish, "projectButtons").text;
  const description = isWebsiteEnglish
    ? project.en_description
    : project.br_description;

  return (
    <div className="flex flex-col items-start lg:w-1/2">
      <h3 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
        {isWebsiteEnglish ? project.en_title : project.br_title}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag, id) => (
          <li
            key={id}
            className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-inset ring-brand-100"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-5 space-y-3 leading-relaxed">
        {description.map((text, id) => (
          <p key={id}>{text}</p>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          {labels.demo}
          <BiLinkExternal size={18} />
        </a>
        {project.codeLink && (
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <BsGithub size={18} />
            {labels.code}
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;
