import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { getSection } from "./WebsiteTexts";

function Contact({ isWebsiteEnglish }) {
  const [heading, body] = getSection(isWebsiteEnglish, "contact").text;
  const links = getSection(isWebsiteEnglish, "navigation").text;
  const ctaLabel = links[4];

  return (
    <section id="contact" className="bg-brand-600 text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid items-center  lg:grid-cols-[1.4fr_1fr]">
          <div className="">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/90">
              {body}
            </p>
          </div>
          <div className="flex flex-wrap gap-3  lg:justify-end">
            <a
              href="https://www.linkedin.com/in/giovane-forlenza/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-brand-700 hover:bg-brand-50 focus-visible:outline-white"
            >
              <BsLinkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/GiovaneForlenza"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-white/40 text-white hover:bg-white/10 focus-visible:outline-white"
            >
              <BsGithub size={18} />
              GitHub
            </a>
            <a
              href="https://wa.me/+5511969194352"
              className="btn bg-white text-brand-700 hover:bg-brand-50 focus-visible:outline-white"
            >
              <FaWhatsapp size={18} />
              {ctaLabel}
            </a>
          </div>
        </div>
        <p className="mt-16 border-t border-white/20 pt-6 text-sm text-white/80">
          © {new Date().getFullYear()} Giovane Forlenza
        </p>
      </div>
    </section>
  );
}

export default Contact;
