import React,{useState} from "react";

const datas = [
  {
    title: "We'll Remove Your Trees FAST1",
    subtitle: "We'll Get Rid Of That Tree ASAP. Complete The Form Now.",
  },
  {
    title: "We'll Remove Your Trees FAST2",
    subtitle: "We'll Get Rid Of That Tree ASAP. Complete The Form Now.",
  },
  {
    title: "We'll Remove Your Trees FAST3",
    subtitle: "We'll Get Rid Of That Tree ASAP. Complete The Form Now.",
  },
];

const Hero = () => {


  return (
    <>
      <div className=" bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat text-white">
        <div className=" max-w-screen-xl mx-auto pt-8 md:pt-20  pb-5">
        
          {datas.map((data, index) => (
            <div key={index} className=" flex flex-row gap-2 ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-check"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
              </div>
              <div>
                <div className=" font-semibold text-lg">{data.title}</div>
                <div className=" font-thin text-sm mb-5">{data.subtitle}</div>
              </div>
            </div>
          ))}

          {/* <img className=" rounded-lg" src="/hero-thum.jpg" /> */}
        </div>

      
          <div class="container mx-auto flex">
            <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p class="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <p class="text-xs text-gray-500 mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </p>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Hero;
