import React from "react";

const CreateEvent = () => {
  return (
    <div className="py-[20px] px-[16px] bg-[#B7D8FF] rounded-xl max-h-44">
      <div className="flex items-center justify-center">
        <div className="">
          <div className="text-[14px]">
            Need funding for your campus fest, tech event, or hackathon?
          </div>
          <div className="my-3 pr-[16px]">
            <h1 className="bg-gradient-to-r from-[#378BD8] to-[#2E1658] inline-block text-transparent bg-clip-text font-semibold text-[16px]">
              Sponsorly
            </h1>
            <span className="font-semibold"> Has You Covered! 🚀</span>
          </div>
        </div>
        <div className="">
          <img
            src="/assets/organic-flat-people-asking-questions-illustration 1.png"
            alt=""
            className="w-64"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
