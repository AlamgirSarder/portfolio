import About from "./components/about/About";
import Backtotop from "./components/backtotop/Backtotop";
import Banner from "./components/banner/Banner";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
import Service from "./components/service/Service";

function App() {
  return (
    <>
      <section id="navbar">
        <Navbar />
      </section>

      <Banner />
      <section id="about">
        <About />
      </section>
      <section id="service">
        <Service />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Backtotop/>
    </>
  );
}

export default App;
