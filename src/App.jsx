import { useEffect, useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

export default function App() {
  const [isWebsiteEnglish, setIsWebsiteEnglish] = useState(true);

  useEffect(() => {
    document.documentElement.lang = isWebsiteEnglish ? "en" : "pt-BR";
  }, [isWebsiteEnglish]);

  return (
    <>
      <NavBar
        isWebsiteEnglish={isWebsiteEnglish}
        setIsWebsiteEnglish={setIsWebsiteEnglish}
      />
      <Home isWebsiteEnglish={isWebsiteEnglish} />
    </>
  );
}
