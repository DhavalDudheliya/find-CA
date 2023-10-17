import React from "react";

function Cards() {
  return (
    // All STEPS ---------------------------------------------------------------------------------------------------------------------------------------------------

    // Step 1 ---------------------------------------------------------------
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 px-6 lg:px-32 py-10">
      <div className="flex flex-col p-6 rounded-xl bg-fs-search-button-text shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] relative">
        <div className="absolute top-[-7px] left-[-7px] rounded-3xs font-bold text-lg lg:text-5xl p-1 px-2 [background:linear-gradient(95.64deg,_#0076ce,_#9400d3)] text-fs-search-button-text">
          1<sup>st</sup>
        </div>
        <p className="text-5xl font-bold text-center inline-block">
          Commencement of business
        </p>
        <p className="text-lg text-center inline-block">
          Invested sharehoulder must confirm payment and office address
        </p>
        <div className="bg-fs-search-table-bg rounded-lg flex flex-row p-4 my-4 mx-4 h-full justify-between">
          <div className="flex flex-col mx-2">
            <p className="text-fs-search-primary font-bold mb-2">Due Date</p>
            <p>Within 180 Days</p>
          </div>
          <div className="flex flex-col">
            <p className="text-fs-search-red font-bold mb-2">Penalty fees</p>
            <p>
              $<span className="font-bold underline">50000</span> for the
              company
            </p>
            <p>
              $<span className="font-bold underline">1000</span> /day for
              director
            </p>
          </div>
        </div>
      </div>

      {/* Step 2 --------------------------------------------------------------- */}
      <div className="flex flex-col p-6 rounded-xl bg-fs-search-button-text shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] relative">
        <div className="absolute top-[-7px] left-[-7px] rounded-3xs font-bold text-lg lg:text-5xl p-1 px-2 [background:linear-gradient(95.64deg,_#0076ce,_#9400d3)] text-fs-search-button-text">
          2<sup>nd</sup>
        </div>
        <p className="text-5xl font-bold text-center inline-block">
          Auditor Appointment
        </p>
        <p className="text-lg text-center inline-block">
          Company informs new auditor and submits ADT.1 from to ROC.
        </p>
        <div className="bg-fs-search-table-bg rounded-lg flex flex-row p-4 my-4 mx-4 h-full justify-between">
          <div className="flex flex-col">
            <p className="text-fs-search-primary font-bold mb-2">Due Date</p>
            <p>Within 30 Days</p>
          </div>
          <div className="flex flex-col">
            <p className="text-fs-search-red font-bold mb-2">Penalty fees</p>
            <p>
              $<span className="font-bold underline">300</span> per month
            </p>
          </div>
        </div>
      </div>

      {/* Step 3 --------------------------------------------------------------- */}
      <div className="flex flex-col p-6 rounded-xl bg-fs-search-button-text shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] relative">
        <div className="absolute top-[-7px] left-[-7px] rounded-3xs font-bold  text-lg lg:text-5xl p-1 px-2 [background:linear-gradient(95.64deg,_#0076ce,_#9400d3)] text-fs-search-button-text">
          3<sup>rd</sup>
        </div>
        <p className="text-5xl font-bold text-center inline-block">DIN eKYC</p>
        <p className="text-lg text-center inline-block">
          Director share personal information for identification & verification
        </p>
        <div className="bg-fs-search-table-bg rounded-lg flex flex-row p-4 my-4 mx-4 h-full justify-between">
          <div className="flex flex-col">
            <p className="text-fs-search-primary font-bold v">Due Date</p>
            <p>Every Year</p>
          </div>
          <div className="flex flex-col">
            <p className="text-fs-search-red font-bold mb-2">Penalty fees</p>
            <p>
              $<span className="font-bold underline">5000</span> one time
            </p>
          </div>
        </div>
      </div>

      {/* Step 4 --------------------------------------------------------------- */}
      <div className="flex flex-col p-6 rounded-xl bg-fs-search-button-text shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] relative">
        <div className="absolute top-[-7px] left-[-7px] rounded-3xs font-bold text-lg lg:text-5xl p-1 px-2 [background:linear-gradient(95.64deg,_#0076ce,_#9400d3)] text-fs-search-button-text">
          4<sup>th</sup>
        </div>
        <p className="text-5xl font-bold text-center inline-block">DPT-3</p>
        <p className="text-lg text-center inline-block">
          Companies report money taken from people to ROC; auditors confirm
          details.
        </p>
        <div className="bg-fs-search-table-bg rounded-lg flex flex-row p-4 my-4 mx-4 h-full justify-between">
          <div className="flex flex-col">
            <p className="text-fs-search-primary font-bold mb-2">Due Date</p>
            <p>Within 30 Days</p>
          </div>
          <div className="flex flex-col">
            <p className="text-fs-search-red font-bold mb-2">Penalty fees</p>
            <p>
              $<span className="font-bold underline">300</span> per month
            </p>
          </div>
        </div>
      </div>

      {/* Step 5 --------------------------------------------------------------- */}
      <div className="flex flex-col p-6 rounded-xl bg-fs-search-button-text shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] relative">
        <div className="absolute top-[-7px] left-[-7px] rounded-3xs font-bold  text-lg lg:text-5xl p-1 px-2 [background:linear-gradient(95.64deg,_#0076ce,_#9400d3)] text-fs-search-button-text">
          5<sup>th</sup>
        </div>
        <p className="text-5xl font-bold text-center inline-block">
          MCA From AOC-4
        </p>
        <p className="text-lg text-center inline-block">
          It's like an official report card for a company's documents
        </p>
        <div className="bg-fs-search-table-bg rounded-lg flex flex-row p-4 my-4 mx-4 h-full justify-between">
          <div className="flex flex-col">
            <p className="text-fs-search-primary font-bold mb-2">Due Date</p>
            <p>On or Before 30th November</p>
          </div>
          <div className="flex flex-col">
            <p className="text-fs-search-red font-bold mb-2">Penalty fees</p>
            <p>
              $<span className="font-bold underline">200</span> per day
            </p>
            <p>(No upper limit)*</p>
          </div>
        </div>
      </div>

      {/* Step 6 --------------------------------------------------------------- */}
      <div className="flex flex-col p-6 rounded-xl bg-fs-search-button-text shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] relative">
        <div className="absolute top-[-7px] left-[-7px] rounded-3xs font-bold text-lg lg:text-5xl p-1 px-2 [background:linear-gradient(95.64deg,_#0076ce,_#9400d3)] text-fs-search-button-text">
          6<sup>th</sup>
        </div>
        <p className="text-5xl font-bold text-center inline-block">
          MCA From MGT-7
        </p>
        <p className="text-lg text-center inline-block">
          Cpmpanies must annually report activities and finanace to the
          registrar.
        </p>
        <div className="bg-fs-search-table-bg rounded-lg flex flex-row p-4 my-4 mx-4 h-full justify-between">
          <div className="flex flex-col">
            <p className="text-fs-search-primary font-bold mb-2">Due Date</p>
            <p>On or Before 31st December</p>
          </div>
          <div className="flex flex-col">
            <p className="text-fs-search-red font-bold mb-2">Penalty fees</p>
            <p>
              $<span className="font-bold underline">200</span> per day
            </p>
            <p>(No upper limit)*</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
