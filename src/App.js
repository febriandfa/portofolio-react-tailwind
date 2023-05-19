// import { Navbar, Landing, About, Skills, Projects, Contact, Footer } from "../src/components";
import { Home, Portfolios } from "./pages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="App w-full overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolios" element={<Portfolios />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
