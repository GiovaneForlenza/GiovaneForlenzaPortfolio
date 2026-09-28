import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./Skills";

function Home({ isWebsiteEnglish }) {
  return (
    <main className="w-full text-body">
      <Hero isWebsiteEnglish={isWebsiteEnglish} />
      <About isWebsiteEnglish={isWebsiteEnglish} />
      <Skills isWebsiteEnglish={isWebsiteEnglish} />
      <Portfolio isWebsiteEnglish={isWebsiteEnglish} />
      <Contact isWebsiteEnglish={isWebsiteEnglish} />
    </main>
  );
}

export default Home;
