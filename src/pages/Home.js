import { Fragment } from "react";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Layout/Footer";
import Projects from "../components/Projects/Projects";
import TechStack from "../components/TechStack/TechStack";

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <TechStack />
      <Projects />
      <About />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
