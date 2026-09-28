import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { getSection } from "./WebsiteTexts";

const SECTION_IDS = ["#home", "#about", "#skills", "#portfolio", "#contact"];

function LanguageSwitch({ isWebsiteEnglish, setIsWebsiteEnglish }) {
  const options = [
    { label: "EN", value: true, name: "English" },
    { label: "PT", value: false, name: "Português" },
  ];
  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex rounded-lg border border-line bg-white p-0.5 text-xs font-bold"
    >
      {options.map((option) => {
        const active = isWebsiteEnglish === option.value;
        return (
          <button
            key={option.label}
            type="button"
            aria-pressed={active}
            aria-label={option.name}
            onClick={() => setIsWebsiteEnglish(option.value)}
            className={`rounded-md px-2.5 py-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600 ${
              active ? "bg-brand-600 text-white" : "text-body hover:text-ink"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

function NavBar({ isWebsiteEnglish, setIsWebsiteEnglish }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const links = getSection(isWebsiteEnglish, "navigation").text;
  const pageLinks = links.slice(0, 4);
  const ctaLabel = links[4];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="font-terminal text-lg font-semibold text-ink sm:text-xl"
        >
          <span className="text-brand-600">{"<"}</span>
          Giovane Forlenza
          <span className="text-brand-600">{" />"}</span>
        </a>
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {pageLinks.map((link, id) => (
            <a
              key={id}
              href={SECTION_IDS[id]}
              className="rounded-md px-3 py-2 text-sm font-semibold text-body transition hover:text-ink"
            >
              {link}
            </a>
          ))}
          <span className="mx-3 h-5 w-px bg-line" aria-hidden="true" />
          <LanguageSwitch
            isWebsiteEnglish={isWebsiteEnglish}
            setIsWebsiteEnglish={setIsWebsiteEnglish}
          />
          <a href="https://wa.me/+5511969194352" className="btn-primary ml-3">
            <FaWhatsapp size={18} />
            {ctaLabel}
          </a>
        </nav>
        <button
          type="button"
          className="rounded-md p-2 text-ink lg:hidden"
          aria-label="Menu"
          aria-expanded={isNavOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {isNavOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-line bg-white px-5 pb-6 pt-2 lg:hidden"
        >
          {pageLinks.map((link, id) => (
            <a
              key={id}
              href={SECTION_IDS[id]}
              onClick={() => setIsNavOpen(false)}
              className="block border-b border-line py-3 text-base font-semibold text-ink"
            >
              {link}
            </a>
          ))}
          <div className="mt-5 flex items-center justify-between gap-4">
            <LanguageSwitch
              isWebsiteEnglish={isWebsiteEnglish}
              setIsWebsiteEnglish={setIsWebsiteEnglish}
            />
            <a
              href="#contact"
              onClick={() => setIsNavOpen(false)}
              className="btn-primary"
            >
              {ctaLabel}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
