export const ENGLISH_SECTIONS = {
  HERO: "Hero",
  ABOUT: "About Me",
  PORTFOLIO: "Portfolio",
  PORTFOLIO_BTN: "Portfolio_btn",
};
export const BR_SECTIONS = {
  HERO: "Hero",
  SOBRE: "Sobre mim",
  PORTFOLIO: "Portifólio",
  PORTFOLIO_BTN: "Portfolio_btn",
};

export const WEBSITE_LANGUAGES = {
  ENGLISH: "English",
  PORTUGUESE: "Portuguese",
};

export const TEXT_ENGLISH = [
  {
    title: "Hero",
    text: [
      "Hello World! My name is Giovane Forlenza",
      "I'm a passionate React web dev, based in São Paulo, Brazil",
    ],
  },
  {
    title: "About Me",
    text: [
      "I am 24 years old, and I've been studied programming since 2017.",
      "In 2021 I graduated from Conestoga College Canada, with a Computer Programming degree",
    ],
  },
  { title: "Portfolio", text: "Check out some of my work right here" },
  { title: "Portfolio_btn", text: "Check out my portfolio" },
];

export const TEXT_BR = [
  {
    title: "Hero",
    text: [
      "Hello World! Meu nome é Giovane Forlenza",
      "Eu sou um Dev fanático por inovação e criação, moro em São Paulo",
    ],
  },
  {
    title: "Sobre mim",
    text: [
      "Eu tenho 24 anos, e estudo programação desde 2017",
      "Eu 2021 eu me formei programador na faculdade Conestoga College, no Canadá",
    ],
  },
  { title: "Portifólio", text: "Dê uma olhada nos meus trabalhos anteriores" },
  { title: "Portfolio_btn", text: "Veja meu portfólio" },
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
