import { Navbar, Landing, About, Skills, Projects, Contact, Footer } from "../src/components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="App w-full bg-primary h-full">
      <Navbar />
      <div className="md:px-16 px-8">
        <div id="landing" data-aos="fade-down" data-aos-duration="1000">
          <Landing />
        </div>
        <div id="about" data-aos="fade-up" data-aos-duration="1000">
          <About />
        </div>
        <div id="skills" data-aos="fade-up" data-aos-duration="1000">
          <Skills />
        </div>
        <div id="projects" data-aos="fade-up" data-aos-duration="1000">
          <Projects />
        </div>
        <div id="contact" data-aos="fade-up" data-aos-duration="1000">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
