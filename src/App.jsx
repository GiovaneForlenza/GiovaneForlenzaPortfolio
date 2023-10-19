import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  return (
    <div className="select-none">
      <NavBar />
      <Home />
      <SocialLinks />
    </div>
  );
}
