import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import austin from "../assets/portfolio/austinMovingCo.jpg";
import realters from "../assets/portfolio/realters.png";
import BrowserFrame from "./BrowserFrame";
import { getSection } from "./WebsiteTexts";

function Hero({ isWebsiteEnglish }) {
  const [greeting, location] = getSection(isWebsiteEnglish, "hero").text;
  const headline = getSection(isWebsiteEnglish, "heroHeadline").text;
  const availability = getSection(isWebsiteEnglish, "availability").text;
  const portfolioBtn = getSection(isWebsiteEnglish, "portfolioBtn").text;

  return (
    <section id="home" className="relative overflow-hidden bg-white pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0  opacity-70 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:py-20">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {availability}
          </p>
          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {headline}
          </h1>
          <p className="mt-6 text-lg font-semibold text-ink">{greeting}</p>
          <p className="mt-1 max-w-lg text-lg leading-relaxed text-body">
            {location}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 ">
            <a href="#portfolio" className="btn-primary group">
              {portfolioBtn}
              <MdOutlineKeyboardArrowRight
                size={20}
                className="-mr-1 rotate-90 "
              />
            </a>
            <a
              href="https://github.com/GiovaneForlenza"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <BsGithub size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/giovane-forlenza/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <BsLinkedin size={18} className="text-[#0a66c2]" />
              LinkedIn
            </a>
          </div>
        </div>

        <div
          className="relative hidden pb-14 pl-12 lg:block"
          aria-hidden="true"
        >
          <BrowserFrame src={austin} alt="Austin Moving Co. website" />
          <BrowserFrame
            src={realters}
            alt="Realters website"
            className="absolute bottom-0 left-0  w-3/5"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
