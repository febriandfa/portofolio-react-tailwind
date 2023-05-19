import { Contact, Footer, Navbar, Portfolio } from "../components";

const Portfolios = () => {
  return (
    <div className="Portfolios">
      <Navbar />
      <div className="md:px-16 px-8">
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolios;
