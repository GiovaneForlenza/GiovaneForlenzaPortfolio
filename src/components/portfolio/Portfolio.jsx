import BrowserFrame from "../BrowserFrame";
import SectionTitle from "../SectionTitle";
import { getSection } from "../WebsiteTexts";
import { PROJECTS } from "./PortfolioProjects";
import ProjectDetails from "./ProjectDetails";

import "../../scroll-animation.css";

function Portfolio({ isWebsiteEnglish }) {
  const { title, text } = getSection(isWebsiteEnglish, "portfolio");

  return (
    <section id="portfolio" className="bg-canvas py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle title={title} subtitle={text} />
        <div className="space-y-8">
          {PROJECTS.map((project, id) => {
            const title = isWebsiteEnglish
              ? project.en_title
              : project.br_title;
            return (
              <article
                className="scroll-animation rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-8"
                key={id}
              >
                <div
                  className={`flex flex-col gap-8 lg:items-center lg:gap-12 ${
                    id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  <div className="lg:w-1/2">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={title}
                      className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
                    >
                      <BrowserFrame
                        src={project.photo}
                        alt={title}
                        url={new URL(project.projectLink).host}
                      />
                    </a>
                  </div>
                  <ProjectDetails
                    project={project}
                    isWebsiteEnglish={isWebsiteEnglish}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
