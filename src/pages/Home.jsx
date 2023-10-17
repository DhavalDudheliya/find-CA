import React from "react";
import Header from "../components/header/header";
import Hero1 from "../components/searchPart/Hero1";
import Hero2 from "../components/stepsPart/Hero2";
import Intro from "../components/intro/Intro";
import Footer from "../components/footer/Footer";

// --------------------------------------------   Flow of the Home Page  -------------------------------------------------------------

//                                                     Header
//                                                       |
//                                                 Hero1-Search Name
//                                                       |
//                                                   Hero2-steps
//                                                       |
//                                                     Intro

// -----------------------------------------------------------------------------------------------------------------------------------

function Home() {
  return (
    <>
      <div
        className="relative min-h-screen pb-100px"
        style={{
          backgroundImage: `url('/Gradient_background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <Hero1 />
      </div>

      <div className="my-10 min-h-screen">
        <Hero2 />
      </div>

      <div className="relative">
        <Intro />
      </div>
    </>
  );
}

export default Home;
