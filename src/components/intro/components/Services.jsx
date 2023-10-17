import React from "react";
import Benefits from "./Benefits";

const Services = () => {
  return (
    <div className="flex-1 flex-col">
      <div>
        <b className="text-46xl inline-block text-center lg:text-left md:text-left">
          <p className="m-0">
            <span
              style={{
                background: "linear-gradient(90.97deg, #0076ce, #9400d3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              All-in-One
            </span>
            <span> platform</span>
          </p>
          <p className="m-0">that Makes Easier</p>
        </b>
      </div>
      <div>
        <p className="text-5xl pr-8 py-2 text-center lg:text-left md:text-left">
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals
        </p>
      </div>

      {/* Benefits */}
      <Benefits />
    </div>
  );
};

export default Services;
