export const ENGLISH_SECTIONS = {
  HERO: "Hero",
  ABOUT: "About Me",
  PORTFOLIO: "Portfolio",
  PORTFOLIO_BTN: "Portfolio_btn",
  NAVIGATION: "Navigation",
};
export const BR_SECTIONS = {
  HERO: "Hero",
  SOBRE: "Sobre mim",
  PORTFOLIO: "Portfólio",
  PORTFOLIO_BTN: "Portfolio_btn",
  NAVEGACAO: "Navegação",
};

export const WEBSITE_LANGUAGES = {
  ENGLISH: "English",
  PORTUGUESE: "Portuguese",
};

// Each entry has a stable `id` shared by both languages, so components can
// just call getSection(isWebsiteEnglish, "id") without knowing the translated title.
export const TEXT_ENGLISH = [
  {
    id: "hero",
    title: "Hero",
    text: [
      "Hello world! My name is Giovane Forlenza",
      "I'm a passionate React web dev, based in São Paulo, Brazil",
    ],
  },
  {
    id: "heroHeadline",
    title: "Hero_headline",
    text: "I build fast, responsive React websites and web apps for your business.",
  },
  {
    id: "availability",
    title: "Availability",
    text: "Available for freelance projects",
  },
  {
    id: "about",
    title: "About Me",
    text: [
      "As a Brazilian developer with a global mindset, I’ve turned curiosity into code since 2017. My journey took a pivotal turn in 2019 when I moved to Canada to pursue a Computer Programming diploma at Conestoga College an experience that sharpened my technical foundation and taught me to craft solutions that bridge functionality and user needs.",
      "Specializing in React since 2021, I thrive on self-directed learning and building applications that simplify lives. Whether creating tools for personal use or client-driven projects, I prioritize clean architecture, responsive design, and meaningful impact. To me, coding isn’t just logic, it’s solving real-world puzzles with creativity and precision.",
    ],
  },
  {
    id: "aboutFacts",
    title: "About_facts",
    text: [
      { label: "Coding since", value: "2017" },
      { label: "React since", value: "2021" },
      {
        label: "Education",
        value: "Computer Programming, Conestoga College (Canada)",
      },
      { label: "Based in", value: "São Paulo, Brazil" },
    ],
  },
  {
    id: "skills",
    title: "Skills",
    text: "The tools I use every day to build fast, maintainable interfaces.",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    text: "Check out some of my work right here",
  },
  {
    id: "portfolioBtn",
    title: "Portfolio_btn",
    text: "Check out my portfolio",
  },
  {
    id: "projectButtons",
    title: "Project_buttons",
    text: { demo: "Live demo", code: "Code" },
  },
  {
    id: "contact",
    title: "Contact",
    text: [
      "Have a project in mind?",
      "I'm open to freelance front-end and React work. Send me a message on LinkedIn and let's talk about what you need.",
    ],
  },
  {
    id: "navigation",
    title: "Navigation",
    text: ["Home", "About", "Skills", "Portfolio", "Let's talk"],
  },
];

export const TEXT_BR = [
  {
    id: "hero",
    title: "Hero",
    text: [
      "Hello world! Meu nome é Giovane Forlenza",
      "Eu sou um dev apaixonado por inovação e criação",
    ],
  },
  {
    id: "heroHeadline",
    title: "Hero_headline",
    text: "Crio sites e aplicações React rápidos e responsivos para o seu negócio.",
  },
  {
    id: "availability",
    title: "Availability",
    text: "Disponível para projetos e freelance",
  },
  {
    id: "about",
    title: "Sobre mim",
    text: [
      "Sou um desenvolvedor com uma visão global, transformando curiosidade em código desde 2017. Minha trajetória ganhou um novo rumo em 2019, quando me mudei para o Canadá para estudar Programação na faculdade Conestoga College, uma experiência que solidificou minha base técnica e me ensinou a criar soluções que unem funcionalidade às necessidades do usuário.",
      "Estudo React desde 2021, me dedico ao aprendizado autodidata e ao desenvolvimento de aplicações que simplificam a vida. Seja criando ferramentas para uso pessoal ou projetos para clientes, priorizo arquitetura limpa, design responsivo e impacto significativo.",
      "Para mim, programar não é apenas lógica, é resolver problemas reais com criatividade e precisão.",
    ],
  },
  {
    id: "aboutFacts",
    title: "About_facts",
    text: [
      { label: "Programando desde", value: "2017" },
      { label: "React desde", value: "2021" },
      {
        label: "Formação",
        value: "Computer Programming, Conestoga College (Canadá)",
      },
      { label: "Moro em", value: "São Paulo, Brasil" },
    ],
  },
  {
    id: "skills",
    title: "Skills",
    text: "As ferramentas que uso no dia a dia para criar interfaces rápidas e fáceis de manter.",
  },
  {
    id: "portfolio",
    title: "Portfólio",
    text: "Confira um pouco do meu trabalho",
  },
  {
    id: "portfolioBtn",
    title: "Portfolio_btn",
    text: "Confira o meu portfólio",
  },
  {
    id: "projectButtons",
    title: "Project_buttons",
    text: { demo: "Ver demo", code: "Código" },
  },
  {
    id: "contact",
    title: "Contato",
    text: [
      "Tem um projeto em mente?",
      "Estou aberto a projetos freelance de front-end e React. Me chame no LinkedIn e vamos conversar sobre o que você precisa.",
    ],
  },
  {
    id: "navigation",
    title: "Navegação",
    text: ["Home", "Sobre mim", "Skills", "Portfólio", "Vamos conversar"],
  },
];

// Returns the whole entry ({ id, title, text }) for the active language.
export function getSection(isWebsiteEnglish, id) {
  const list = isWebsiteEnglish ? TEXT_ENGLISH : TEXT_BR;
  return list.find((obj) => obj.id === id);
}

// Legacy helpers (title based), kept for compatibility.
export function getTextFromScript(language, title) {
  const list = language === WEBSITE_LANGUAGES.ENGLISH ? TEXT_ENGLISH : TEXT_BR;
  return list.filter((obj) => obj.title === title)[0].text;
}

export function getTitleFromScript(language, title) {
  const list = language === WEBSITE_LANGUAGES.ENGLISH ? TEXT_ENGLISH : TEXT_BR;
  return list.filter((obj) => obj.title === title)[0].title;
}
