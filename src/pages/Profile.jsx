import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/header";
import axios from "axios";

const Profile = () => {
  const [data, setData] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [benifits, setBenifits] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/charteredAccountants?name_like=${name}`)
      .then((response) => {
        const responseData = response.data[0];
        setData(responseData);
        setServiceList(responseData.about.services);
        setBenifits(responseData.about.benefits);
      })
      .catch((error) => console.error("Error:", error));
  }, [name]);

  return (
    <div>
      <Header />
      <div className="mx-6 my-10 md:my-20 md:mx-32 font-poppins">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 grid-rows-4 gap-8">
          <div className="col-span-2 row-span-3">
            <div className="flex flex-col space-y-6 items-center">
              <section>
                <div className="flex flex-col items-start justify-between space-y-6 p-4 rounded-xl bg-fs-search-button-text">
                  <div className="font-bold text-2xl text-black whitespace-nowrap">
                    {data.name}
                  </div>
                  <p className="font-normal text-black text-xl leading-[32px]">
                    {data.intro}
                  </p>
                  <div className="flex flex-row space-x-2">
                    <img
                      className="w-[24px] h-[24px]"
                      alt="Star fill"
                      src="/star-fill.png"
                    />
                    <span className="top-0 font-normal text-fs-search-primary text-[20px] leading-[normal]">
                      <span className="font-bold text-fs-search-primary">
                        {data.rating}
                      </span>
                      <span className="text-black">({data.reviewCount})</span>
                    </span>
                  </div>
                </div>
              </section>
              <section className="w-full">
                <div className="flex flex-col space-y-6 p-4 shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] rounded-lg">
                  <div className="flex flex-row items-center justify-between">
                    <h1>{data.taskComplexity}</h1>
                    <h1>
                      <b>{data.price}</b>
                    </h1>
                  </div>
                  <div className="flex flex-row items-center justify-start space-x-2">
                    <img
                      className="w-[24px] h-[24px]"
                      alt="Calender fill"
                      src="/calendar-2-line.png"
                    />
                    <h1>{data.deliveryTime}</h1>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
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
                  {data.testimonial && (
                    <>
                      <p className="font-normal text-black text-xl leading-[32px]">
                        {data.testimonial.text}
                      </p>
                      <h1 className="flex justify-end text-xl font-medium mx-2">
                        - {data.testimonial.author}
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
              <section className="w-full">
                <img
                  className="rounded-xl h-96 w-full"
                  alt="User"
                  src={data.image}
                  onError={(event) => {
                    event.target.src = "/default.png";
                    event.onerror = null;
                  }}
                />
              </section>
              <section className="w-full p-2">
                <div className="flex flex-col space-y-6">
                  <p className="font-bold text-2xl text-black">
                    About {data.name}
                  </p>
                  <div className="flec flex-col space-y-10">
                    {data.about && (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                          <div className="space-y-3">
                            <h1 className="text-about-text-headind font-semibold">
                              FROM
                            </h1>
                            <p className="font-normal text-black text-xl">
                              {data.about.from}
                            </p>
                          </div>
                          <div className=" space-y-3">
                            <h1 className="text-about-text-headind font-semibold">
                              PARTNER SINCE
                            </h1>
                            <p className="font-normal text-black text-xl">
                              {data.about.partnerSince}
                            </p>
                          </div>
                          <div className="space-y-3 lg:mt-0 mt-6">
                            <h1 className="text-about-text-headind font-semibold">
                              AVERAGE RESPONSE TIME
                            </h1>
                            <p className="font-normal text-black text-xl">
                              {data.about.averageResponseTime}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h1 className="text-about-text-headind font-semibold">
                            ABOUT
                          </h1>
                          <p className="font-normal text-black text-xl">
                            {data.about.description}
                          </p>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <div>
                            <h2 className="mb-2 text-about-text-headind font-semibold">
                              SERVICES I OFFER:
                            </h2>
                            <ul className="max-w-md space-y-1 font-normal text-black text-xl list-disc list-inside p-2">
                              {serviceList.map((service, index) => (
                                <li key={index}>{service}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h2 className="mb-2 text-about-text-headind font-semibold">
                              WHY ME?
                            </h2>
                            <ul className="max-w-md space-y-1 font-normal text-black text-xl list-disc list-inside p-2">
                              {benifits.map((benifit, index) => (
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
        <div className="flex flex-col space-y-6 justify-start">
          <p className="font-bold text-2xl text-black">Reccomanded for you</p>
          <div className="flex flex-row rounded-xl gap-8">
            <div className="flex flex-col rounded-xl shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)]">
              <img className="rounded" src="/rectangle-376.png" alt="Image" />
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
                    src="/star-fill.png"
                  />
                  <span className="top-0 font-normal text-fs-search-primary text-[20px] leading-[normal]">
                    <span className="font-bold text-fs-search-primary">
                      4.8
                    </span>
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
                <img className="rounded" src="/rectangle-376.png" alt="Image" />
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
                      src="/star-fill.png"
                    />
                    <span className="top-0 font-normal text-fs-search-primary text-[20px] leading-[normal]">
                      <span className="font-bold text-fs-search-primary">
                        5.0
                      </span>
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
                <img className="rounded" src="/rectangle-376.png" alt="Image" />
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
                      src="/star-fill.png"
                    />
                    <span className="top-0 font-normal text-fs-search-primary text-[20px] leading-[normal]">
                      <span className="font-bold text-fs-search-primary">
                        4.3
                      </span>
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
      </div>
    </div>
  );
};

export default Profile;
