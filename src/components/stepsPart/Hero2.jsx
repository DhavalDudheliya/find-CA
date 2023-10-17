import React from "react";
import Cards from "./components/Cards";

function Hero2() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <b className="text-[30px] text-center lg:text-46xl font-poppins">
            <span>{`Want to  `}</span>
            <span
              style={{
                background: "linear-gradient(90.97deg, #0076ce, #9400d3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Join
            </span>
            <span> Us?</span>
          </b>
          <p className="text-5xl text-center p-2">
            To remain with us, it is essential that you diligently follow the
            step provided
          </p>
          {/* Cards of steps */}
          <Cards />
          <p className="text-xl mx-6 md:mx-28">
            * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200
            <span className="font-bold"> every day</span> until you file the
            form . There is no maximum penalty amount. So, if you don't file the
            form for a year, you will owe ₹73,000 per form
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero2;
