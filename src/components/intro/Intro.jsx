import React from "react";
import ChatPart from "./components/ChatPart";
import Services from "./components/Services";

function Intro() {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-between px-8 lg:px-32 py-10 font-poppins">
      {/* Left part */}
      <Services />

      {/* Right Part */}
      <ChatPart />
    </div>
  );
}

export default Intro;
