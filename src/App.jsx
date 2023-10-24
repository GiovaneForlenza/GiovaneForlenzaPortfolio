import { useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  const [isWebsiteEnglish, setIsWebsiteEnglish] = useState(true);
  return (
    <div className="select-none">
      <NavBar
        isWebsiteEnglish={isWebsiteEnglish}
        setIsWebsiteEnglish={setIsWebsiteEnglish}
      />
      <Home
        isWebsiteEnglish={isWebsiteEnglish}
        setIsWebsiteEnglish={setIsWebsiteEnglish}
      />
      <SocialLinks />
    </div>
  );
}
