export const TEXT_ENGLISH = [
  {
    title: "Hero",
    text: "Hello World!, I'm Giovane Forlenza. A passionate React web dev, based in São Paulo, Brazil",
  },
  {
    title: "About",
    text: "I am 24 years old, and I've been studied programming since 2017. In 2021 I graduated from Conestoga College Canada, with a Computer Programming degree",
  },
];

export function getTextFromScript(language, title) {
  let returnText;
  if (language === "English")
    returnText = TEXT_ENGLISH.filter((obj) => obj.title === title);

  return returnText[0].text;
}
