import React from "react";

const Recomendations = ({ info }) => {
  return (
    <div className="flex flex-col space-y-6 justify-start mb-12">
      <p className="font-bold text-2xl text-black">Reccomanded for you</p>
      <div className="flex flex-col md:flex-row rounded-xl gap-8">
        <div className="flex flex-col rounded-xl shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)]">
          <img
            className="rounded"
            src="/find-CA/rectangle-376.png"
            alt="Image"
          />
          <div className="flex flex-col p-4">
            <div className="flex flex-raw justify-between items-center mb-4">
              <p className="font-bold text-xl">Michael Jackson</p>
              <p className="font-bold text-xl">€4,370</p>
            </div>
            <p className="mb-4 font-normal text-black text-xl">
              I will do business evaluation and corporate services
            </p>
            <div className="flex flex-row space-x-2 mb-10">
              <img
                className="w-[24px] h-[24px]"
                alt="Star fill"
                src="/find-CA/star-fill.png"
              />
              <span className="top-0 font-normal text-fs-search-primary text-[20px] leading-[normal]">
                <span className="font-bold text-fs-search-primary">4.8</span>
                <span className="text-black">(89)</span>
              </span>
            </div>
            <button className="px-4 py-2 rounded-3xs overflow-hidden flex flex-row items-center justify-center bg-fs-search-primary text-fs-search-button-text text font-semibold w-full">
              View services
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-xl shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] ">
          <div className="flex flex-col rounded-xl shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)]">
            <img
              className="rounded"
              src="/find-CA/rectangle-376.png"
              alt="Image"
            />
            <div className="flex flex-col p-4">
              <div className="flex flex-raw justify-between items-center mb-4">
                <p className="font-bold text-xl">Stevie Wonder</p>
                <p className="font-bold text-xl">€4,263</p>
              </div>
              <p className="mb-4 font-normal text-black text-xl">
                I will do business evaluation and corporate services
              </p>
              <div className="flex flex-row space-x-2 mb-10">
                <img
                  className="w-[24px] h-[24px]"
                  alt="Star fill"
                  src="/find-CA/star-fill.png"
                />
                <span className="top-0 font-normal text-fs-search-primary text-[20px] leading-[normal]">
                  <span className="font-bold text-fs-search-primary">5.0</span>
                  <span className="text-black">(62)</span>
                </span>
              </div>
              <button className="px-4 py-2 rounded-3xs overflow-hidden flex flex-row items-center justify-center bg-fs-search-primary text-fs-search-button-text text font-semibold w-full">
                View services
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-xl shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)]">
          <div className="flex flex-col rounded-xl shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)]">
            <img
              className="rounded"
              src="/find-CA/rectangle-376.png"
              alt="Image"
            />
            <div className="flex flex-col p-4">
              <div className="flex flex-raw justify-between items-center mb-4">
                <p className="font-bold text-xl">Ray Charles</p>
                <p className="font-bold text-xl">€₹2,586</p>
              </div>
              <p className="mb-4 font-normal text-black text-xl">
                I will do business evaluation and corporate services
              </p>
              <div className="flex flex-row space-x-2 mb-10">
                <img
                  className="w-[24px] h-[24px]"
                  alt="Star fill"
                  src="/find-CA/star-fill.png"
                />
                <span className="top-0 font-normal text-fs-search-primary text-[20px] leading-[normal]">
                  <span className="font-bold text-fs-search-primary">4.3</span>
                  <span className="text-black">(189)</span>
                </span>
              </div>
              <button className="px-4 py-2 rounded-3xs overflow-hidden flex flex-row items-center justify-center bg-fs-search-primary text-fs-search-button-text text font-semibold w-full">
                View services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomendations;
