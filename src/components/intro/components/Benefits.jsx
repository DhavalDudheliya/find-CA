import React from "react";

const Benefits = () => {
  return (
    <div className="px-2 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-4">
        <div className="flex flex-row items-center">
          <img
            className=" overflow-hidden h-24"
            alt=""
            src="/find-CA/iconparktwotonesearch.svg"
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
            src="/find-CA/iconparktwotoneenquire.svg"
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
            src="/find-CA/iconparktwotonetablereport.svg"
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
            src="/find-CA/iconparktwotonedegreehat.svg"
          />
          <div className="text-lg ml-3">
            <b>ACADEMY</b>
            <span> to give you the skills for success in your career</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
