import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from 'next/image'

const Hero2 = () => {
  const [apiDatas, setApiDatas] = useState();

  const dataFetch = () => {
    axios({
      method: "get",
      url: "https://backend.emilaragon.website/wp-json/wp/v2/description",
      // responseType: 'stream'
    }).then(function (response) {
      setApiDatas(response);
    });
  };

  useEffect(() => {
    dataFetch();
  }, []);

  console.log(apiDatas?.data);

  return (
    <>
      <div className=" bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat text-white">
        <section className="text-white body-font relative max-w-screen-xl mx-auto">
          <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <div>
              <h1 className=" pb-5 text-xl">LANDSCAPING ADVERTISING</h1>

          {apiDatas?.data.map((apiData) => (
                <div key={apiData.id} className=" flex flex-row gap-2 ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-check"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div>
                    <div className=" font-semibold text-lg">
                      {apiData.title}
                    </div>
                    <div className=" font-thin text-sm mb-5">
                      {apiData.sub_title}
                    </div>
                  </div>
                </div>
              ))} 
             <Image
             height={200}
             width={200}
             alt="aa"
             src="/hero-thum.jpg"
             />
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-10 rounded">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero2;
