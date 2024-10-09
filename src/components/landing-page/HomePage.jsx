import React from "react";

const HomePage = () => {
  return (
    <div className="static h-[630px]">
      <h1 className="mt-[56px] px-[20px] text-2xl font-medium text-[#02073E] text-center lg:mt-24 lg:px-[200px] lg:text-6xl lg:font-semibold md:text-4xl">
        Bringing Sponsors, Artists, and Organizers Together
      </h1>
      <h6 className="text-[#575757] font-normal text-center py-[27px] text-[14px] px-14">
        Effortless Collaboration For Extraordinary Events
      </h6>
      <div className="flex items-center justify-center w-full my-3">
        <img
          className="rounded-full w-[50px] h-[50px] border-[2px] border-[#E6E6E6]"
          src="/assets/1.jpeg"
          alt=""
        />
        <img
          className="rounded-full w-[50px] h-[50px] border-[2px] border-[#E6E6E6] -ml-2"
          src="/assets/2.jpeg"
          alt=""
        />
        <img
          className="rounded-full w-[50px] h-[50px] border-[2px] border-[#E6E6E6] -ml-2"
          src="/assets/3.jpeg"
          alt=""
        />
        <img
          className="rounded-full w-[50px] h-[50px] border-[2px] border-[#E6E6E6] -ml-2"
          src="/assets/4.jpeg"
          alt=""
        />
        <img
          className="rounded-full w-[50px] h-[50px] border-[2px] border-[#E6E6E6] -ml-2"
          src="/assets/5.jpg"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center space-x-1 w-full my-3">
        <img src="/assets/star.svg" alt="" />
        <img src="/assets/star.svg" alt="" />
        <img src="/assets/star.svg" alt="" />
        <img src="/assets/star.svg" alt="" />
        <img src="/assets/star.svg" alt="" />
      </div>
      <div className="px-20 text-sm text-[#575757CC] text-center ">
        Join Sponsorly & elevate your campus events.
      </div>
      <div className="flex items-center justify-center w-full mt-12">
        <button className="bg-gradient-to-r from-[#104DD2] to-[#08286C] text-white text-[14px] w-[185px] h-[44px] rounded-[10px]">
          Sign up for free
        </button>
      </div>
      <div className="absolute bottom-20 bg-gradient-to-b from-white to-[#B0D3FF] w-full h-[175px] rounded-t-[397px] from-30% -z-[100]"></div>
    </div>
  );
};

export default HomePage;
