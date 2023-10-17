import { React } from "react";
import SearchFeild from "./SearchFeild";

function Hero1() {

  return (
    // left part
    <div className="flex flex-col lg:flex-row items-center">
      <div className="flex-1 pr-4 pl-4 lg:pl-32">
        {/* Adjusted padding */}
        <div className="flex flex-col items-center font-poppins">
          <b className="text-[30px] text-left lg:text-46xl">
            {/* Adjusted text size */}
            <span>{`Find  `}</span>
            <span
              style={{
                background: "linear-gradient(90.97deg, #0076ce, #9400d3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Partners
            </span>
            <span> (CAs) available online</span>
          </b>
          <div className="text-xl text-left text-dimgray font-open-sans">
            <b>{`CONNECT `}</b>
            <span>
              with us where your services are listed and visible to a myriad of
              businesses seeking CA’s for compliance support
            </span>
          </div>
          <SearchFeild />
        </div>
      </div>

      {/* Right part - Images */}
      <div className="flex gap-4 lg:gap-[16px] p-4 lg:p-8">
        <div className="flex gap-[16px] p-8">
          <div className="flex-1 flex flex-row items-start justify-start pt-[83px] px-0 pb-0">
            <img
              className="rounded-[20.99px] w-[198.72px] h-[403.03px] object-cover"
              alt=""
              src="find-CA/picture@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start">
            <img
              className="rounded-[20.99px] w-[198.72px] h-[403.03px] object-cover"
              alt=""
              src="find-CA/picture1@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-[41.98276138305664px] px-0 pb-0">
            <img
              className="rounded-[20.99px] w-[198.72px] h-[403.03px] object-cover"
              alt=""
              src="find-CA/picture2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
