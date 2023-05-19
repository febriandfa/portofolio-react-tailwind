import { Contact, Footer, Navbar, Portfolio } from "../components";

const Portfolios = () => {
  return (
    <div className="Portfolios">
      <Navbar />
      <div className="md:px-16 px-8">
        <div id="portofolio" data-aos="fade-down" data-aos-duration="1000">
          <Portfolio />
        </div>
        <div id="landing" data-aos="fade-down" data-aos-duration="1000">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolios;
