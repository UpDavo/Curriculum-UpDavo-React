import React, { useState } from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header from "../components/layouts/Header";
import About from "../components/sections/About";
// import Blogs from "../components/sections/Blogs";
import Brandlogos from "../components/sections/Brandlogos";
import Contact from "../components/sections/Contact";
import Experiences from "../components/sections/Experiences";
import Herosection from "../components/sections/Herosection";
import Pricing from "../components/sections/Pricing";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
// import Works from "../components/sections/Works";
import Instagram from "../components/sections/Instagram";
// import Pdf from "react-to-pdf";

// const ref = React.createRef();

function Homepage() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
      setToggleMenu(false);
    }
  });

  return (
    <>
      <Header
        logoSource="/blanco.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? "content open" : "content"}>
        {/* <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
        <div ref={ref}> */}
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection />
          </ReactCursorPosition>
        </Element>
        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-services">
          <Services />
        </Element>
        <Element name="section-experiences">
          <Experiences />
        </Element>
        {/* <Element name="section-works">
          <Works />
        </Element> */}
        <Element name="section-instagram">
          <Instagram />
        </Element>
        <Element name="section-pricing">
          <Pricing />
        </Element>
        <Element name="section-testimoninal">
          <Testimonials />
        </Element>
        <Element name="section-brandlogos">
          <Brandlogos />
        </Element>
        {/* <Element name="section-blogs">
          <Blogs />
        </Element> */}
        <Element name="section-contact">
          <Contact />
        </Element>
        {/* </div> */}

        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Homepage;
