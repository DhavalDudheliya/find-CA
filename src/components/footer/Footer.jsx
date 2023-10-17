import React from "react";
import NavMenus from "./components/NavMenusFooter";
import { AddrsLogos } from "./components/AddrsLogos";

const Footer = () => {
  return (
    <footer
      className=""
      style={{
        background: "linear-gradient(90.97deg, #0076ce, #9400d3)",
        // WebkitTextFillColor: "transparent",
      }}
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 lg:mr-20">
            <a href="/home" className="flex flex-col items-start mb-2">
              <img
                src="/find-CA/image-1@2x.png"
                className="h-8 mr-3"
                alt="FlowBite Logo"
              />
            </a>
            <p className="text-fs-search-surface-bg max-w-xs">
              India's first platform dedicated to simplifying partner search
            </p>
          </div>
          <NavMenus />
        </div>
        <hr className="my-6 border-fs-search-surface-bg sm:mx-auto lg:my-8" />
        <AddrsLogos />
      </div>
      <div className="w-full h-10 bg-black text-fs-search-surface-bg text-[10px] flex items-center justify-center font-poppins">
        Registered trademark of India Private Limited © 2023 loerumipsum Inc.
        All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
