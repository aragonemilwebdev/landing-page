import React, { useEffect, useState } from "react";
import Image from 'next/image'

//sm md lg xl xl

const Header = () => {
  const [changeBg, setChangeBg] = useState(true);

  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 80) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <div
        className={
          changeBg
            ? "sticky top-0 z-20 bg-red-400 w-full mx-auto flex justify-between items-center p-2"
            : "sticky top-0 z-20 bg-white w-full mx-auto flex justify-between items-center p-2"
        }
      >
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={100}
          />
        <div>
          <button className=" bg-red-600 p-2 rounded-md text-white font-medium ">
            CALL US NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
