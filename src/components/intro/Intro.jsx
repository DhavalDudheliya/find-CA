import React from "react";

function Intro() {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-between px-8 lg:px-32 py-10 font-poppins">
      {/* Left part */}
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
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals
          </p>
        </div>
        <div className="px-2 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-4">
            <div className="flex flex-row items-center">
              <img
                className=" overflow-hidden h-24"
                alt=""
                src="/iconparktwotonesearch.svg"
              />
              <div className="text-lg ml-3">
                <b>SEARCH</b>
                <span> for vital company information</span>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <img
                className="overflow-hidden h-24"
                alt=""
                src="/iconparktwotoneenquire.svg"
              />
              <div className="text-lg ml-3">
                <b>CONNECT</b>
                <span> with the resources to meet your business needs</span>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <img
                className="overflow-hidden h-24"
                alt=""
                src="/iconparktwotonetablereport.svg"
              />
              <div className="text-lg ml-6">
                <b>RESEARCH</b>
                <span> and generate reports that drive growth</span>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <img
                className="overflow-hidden h-28"
                alt=""
                src="/iconparktwotonedegreehat.svg"
              />
              <div className="text-lg ml-3">
                <b>ACADEMY</b>
                <span> to give you the skills for success in your career</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Part */}
      <div className="flex-1">
        <div className="flex flex-row justify-end">
          <div className="flex flex-col w-fit text-[9px] md:text-[14px] lg:text-[14px]">
            <div className="flex justify-end">
              <div className="font-open-sans rounded-t-mini rounded-br-10xs rounded-bl-mini bg-fs-chat-banner-purple py-2 px-4 w-fit my-1">
                Hey, check out loreumipsum services
              </div>
            </div>
            <div className="flex justify-end">
              <div className="font-open-sans rounded-t-mini rounded-br-10xs rounded-bl-mini bg-fs-chat-banner-purple py-2 px-4 w-fit my-1">
                I learned from their videos, got my first job.
              </div>
            </div>
            <div className="flex justify-end">
              <div className="font-open-sans rounded-t-mini rounded-br-10xs rounded-bl-mini bg-fs-chat-banner-purple py-2 px-4 w-fit my-1">
                You won't be disappointed with their services.
              </div>
            </div>
            <div className="flex justify-end">
              <div className="font-open-sans rounded-t-mini rounded-br-10xs rounded-bl-mini bg-fs-chat-banner-blue py-2 px-4 w-fit my-1 mt-6">
                I got a perfect analysis report from them too
              </div>
            </div>
            <div className="flex justify-end">
              <div className="font-open-sans rounded-t-mini rounded-br-10xs rounded-bl-mini bg-fs-chat-banner-blue py-2 px-4 w-fit mt-1">
                Oh, that's great.
              </div>
            </div>
            <div className="">
              <img
                className="h-56 md:h-72 lg:h-96 overflow-hidden max-h-full object-cover"
                alt=""
                src="/teacher@2x.png"
              />
            </div>
          </div>
          <div className="">
            <img
              className="h-56 md:h-72 lg:h-96 overflow-hidden max-h-full object-cover"
              alt=""
              src="/student@2x.png"
            />
          </div>
        </div>
      </div>

      {/* <div className="flex">
        <img
          className="absolute max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/student@2x.png"
        />
        <div className="absolute flex flex-col items-end justify-center font-open-sans">
          <div className="rounded-t-mini rounded-br-10xs rounded-bl-mini bg-fs-search-banner-purple flex flex-row items-start justify-start py-2 px-4">
            <div className="relative leading-[160%]">{`Hey, check out loreumipsum services. `}</div>
          </div>
        </div>
        <div className="absolute flex flex-col items-end justify-center font-open-sans">
          <div className="rounded-t-mini rounded-br-10xs rounded-bl-mini bg-fs-search-banner-purple flex flex-row items-start justify-start py-2 px-4">
            <div className="relative leading-[160%]">
              I learned from their videos, got my first job.
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col items-end justify-center font-open-sans">
          <div className="rounded-t-mini rounded-br-10xs rounded-bl-mini bg-fs-search-banner-purple flex flex-row items-start justify-start py-2 px-4">
            <div className="relative leading-[160%]">
              You won't be disappointed with their services.
            </div>
          </div>
        </div>
        <img
          className="absolute max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/teacher@2x.png"
        />
        <div className="absolute rounded-t-mini rounded-br-mini rounded-bl-10xs bg-fs-search-banner-blue flex flex-row items-start justify-start py-2 px-4">
          <div className="relative leading-[160%]">
            I got a perfect analysis report from them too
          </div>
        </div>
        <div className="absolute rounded-t-mini rounded-br-mini rounded-bl-10xs bg-fs-search-banner-blue flex flex-row items-start justify-start py-2 px-4">
          <div className="relative leading-[160%]">Oh, that's great.</div>
        </div>
      </div> */}
    </div>
  );
}

export default Intro;
