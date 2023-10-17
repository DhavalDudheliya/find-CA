import React from "react";

const About = () => {
  return (
    <div className="md:grid md:grid-cols-5 md:grid-rows-4 md:gap-8 space-y-12">
      <div className="md:col-span-2 md:row-span-3">
        <div className="flex flex-col space-y-6 items-center">
          <section>
            <div className="flex flex-col items-start justify-between space-y-6 p-4 rounded-xl bg-fs-search-button-text">
              <div className="font-bold text-2xl text-black whitespace-nowrap">
                {info.name}
              </div>
              <p className="font-normal text-black text-xl leading-[32px]">
                {info.intro}
              </p>
              <div className="flex flex-row space-x-2">
                <img
                  className="w-[24px] h-[24px]"
                  alt="Star fill"
                  src="/find-CA/star-fill.png"
                />
                <span className="top-0 font-normal text-fs-search-primary text-[20px] leading-[normal]">
                  <span className="font-bold text-fs-search-primary">
                    {info.rating}
                  </span>
                  <span className="text-black">({info.reviewCount})</span>
                </span>
              </div>
            </div>
          </section>
          <section className="w-full">
            <div className="flex flex-col space-y-6 p-4 shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] rounded-lg">
              <div className="flex flex-row items-center justify-between">
                <h1>{info.taskComplexity}</h1>
                <h1>
                  <b>{info.price}</b>
                </h1>
              </div>
              <div className="flex flex-row items-center justify-start space-x-2">
                <img
                  className="w-[24px] h-[24px]"
                  alt="Calender fill"
                  src="/find-CA/calendar-2-line.png"
                />
                <h1>{info.deliveryTime}</h1>
              </div>
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
                <button className="px-4 py-2 rounded-3xs overflow-hidden flex flex-row items-center justify-center bg-fs-search-primary text-fs-search-button-text text font-semibold w-full">
                  Request Proporsal
                </button>
                <button className="px-4 py-2 rounded-3xs box-border overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-fs-search-primary text-fs-search-primary font-semibold w-full">
                  Chat with me
                </button>
              </div>
            </div>
          </section>
          <section className="w-full">
            <div className="flex flex-col space-y-6 p-4 shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] rounded-lg">
              <div>
                <p className="font-bold text-2xl text-black">
                  What people says?
                </p>
              </div>
              {info.testimonial && (
                <>
                  <p className="font-normal text-black text-xl leading-[32px]">
                    {info.testimonial.text}
                  </p>
                  <h1 className="flex justify-end text-xl font-medium mx-2">
                    - {info.testimonial.author}
                  </h1>
                </>
              )}
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="86"
                  height="10"
                  viewBox="0 0 86 10"
                  fill="none"
                >
                  <circle cx="45" cy="5" r="5" fill="#C5C5C5" />
                  <circle cx="63" cy="5" r="5" fill="#C5C5C5" />
                  <circle cx="81" cy="5" r="5" fill="#C5C5C5" />
                  <rect width="32" height="10" rx="5" fill="#0076CE" />
                </svg>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="col-span-3 row-span-4 col-start-3">
        <div className="flex flex-col items-center space-y-6">
          <section className="md:w-full">
            <img
              className="rounded-xl h-72 md:h-96 md:w-full"
              alt="User"
              src={info.image}
              onError={(event) => {
                event.target.src = "/find-CA/default.png";
                event.onerror = null;
              }}
            />
          </section>
          <section className="w-full p-2">
            <div className="flex flex-col items-center md:items-start space-y-6">
              <p className="font-bold text-2xl text-black">About {info.name}</p>
              <div className="flec flex-col space-y-10">
                {info.about && (
                  <>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-6">
                      <div className="space-y-3 justify-center">
                        <h1 className="text-about-text-headind font-semibold">
                          FROM
                        </h1>
                        <p className="font-normal text-black text-xl">
                          {info.about.from}
                        </p>
                      </div>
                      <div className="space-y-3">
                        <h1 className="text-about-text-headind font-semibold">
                          PARTNER SINCE
                        </h1>
                        <p className="font-normal text-black text-xl">
                          {info.about.partnerSince}
                        </p>
                      </div>
                      <div className="space-y-3 lg:mt-0">
                        <h1 className="text-about-text-headind font-semibold">
                          AVERAGE RESPONSE TIME
                        </h1>
                        <p className="font-normal text-black text-xl">
                          {info.about.averageResponseTime}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h1 className="text-about-text-headind font-semibold">
                        ABOUT
                      </h1>
                      <p className="font-normal text-black text-xl">
                        {info.about.description}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div>
                        <h2 className="mb-2 text-about-text-headind font-semibold">
                          SERVICES I OFFER:
                        </h2>
                        <ul className="max-w-md space-y-1 font-normal text-black text-xl list-disc list-inside p-2">
                          {serviceList &&
                            serviceList.map((service, index) => (
                              <li key={index}>{service}</li>
                            ))}
                        </ul>
                      </div>
                      <div>
                        <h2 className="mb-2 text-about-text-headind font-semibold">
                          WHY ME?
                        </h2>
                        <ul className="max-w-md space-y-1 font-normal text-black text-xl list-disc list-inside p-2">
                          {benifits &&
                            benifits.map((benifit, index) => (
                              <li key={index}>{benifit}</li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
