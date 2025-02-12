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
  PORTFOLIO: "Portifólio",
  PORTFOLIO_BTN: "Portfolio_btn",
  NAVEGACAO: "Navegação",
};

export const WEBSITE_LANGUAGES = {
  ENGLISH: "English",
  PORTUGUESE: "Portuguese",
};

export const TEXT_ENGLISH = [
  {
    title: "Hero",
    text: [
      "Hello world! My name is Giovane Forlenza",
      "I'm a passionate React web dev, based in São Paulo, Brazil",
    ],
  },
  {
    title: "About Me",
    text: [
      "As a Brazilian developer with a global mindset, I’ve turned curiosity into code since 2017. My journey took a pivotal turn in 2019 when I moved to Canada to pursue a Computer Programming diploma at Conestoga College an experience that sharpened my technical foundation and taught me to craft solutions that bridge functionality and user needs.",
      "Specializing in React since 2021, I thrive on self-directed learning and building applications that simplify lives. Whether creating tools for personal use or client-driven projects, I prioritize clean architecture, responsive design, and meaningful impact. To me, coding isn’t just logic, it’s solving real-world puzzles with creativity and precision.",
    ],
  },
  { title: "Portfolio", text: "Check out some of my work right here" },
  { title: "Portfolio_btn", text: "Check out my portfolio" },
  {
    title: "Navigation",
    text: ["Home", "About", "Skills", "Portfolio"],
  },
];

export const TEXT_BR = [
  {
    title: "Hero",
    text: [
      "Hello world! Meu nome é Giovane Forlenza",
      "Eu sou um dev apaixonado por inovação e criação, moro em São Paulo",
    ],
  },
  {
    title: "Sobre mim",
    text: [
      "Sou um desenvolvedor brasileiro com uma visão global, transformei curiosidade em código desde 2017. Minha trajetória ganhou um novo rumo em 2019, quando me mudei para o Canadá para estudar Programação de Computadores no Conestoga College—uma experiência que solidificou minha base técnica e me ensinou a criar soluções que unem funcionalidade às necessidades do usuário.",
      "Estudo React desde 2021, me dedico ao aprendizado autodidata e ao desenvolvimento de aplicações que simplificam a vida. Seja criando ferramentas para uso pessoal ou projetos para clientes, priorizo arquitetura limpa, design responsivo e impacto significativo. Para mim, programar não é apenas lógica, é resolver problemas reais com criatividade e precisão.",
    ],
  },
  { title: "Portifólio", text: "Vem conferir um pouco do que eu fiz até aqui" },
  { title: "Portfolio_btn", text: "Confira o meu portfólio" },
  {
    title: "Navegação",
    text: ["Home", "Sobre mim", "Skills", "Portifólio"],
  },
];

export function getTextFromScript(language, title) {
  let returnText;
  if (language === WEBSITE_LANGUAGES.ENGLISH)
    returnText = TEXT_ENGLISH.filter((obj) => obj.title === title);
  else returnText = TEXT_BR.filter((obj) => obj.title === title);
  return returnText[0].text;
}

export function getTitleFromScript(language, title) {
  let returnText;
  if (language === WEBSITE_LANGUAGES.ENGLISH)
    returnText = TEXT_ENGLISH.filter((obj) => obj.title === title);
  else returnText = TEXT_BR.filter((obj) => obj.title === title);
  return returnText[0].title;
}
