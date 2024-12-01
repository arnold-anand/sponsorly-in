import React from "react";

const Card1 = () => {
  return (
    <div className="bg-[#FAF8F8] py-[30px] px-[15px] rounded-[10px] max-w-sm m-2">
      <div className="flex items-center space-x-5">
        <div>
          <img className="" src="/assets/mobile-chat-dark.png" alt="" />
        </div>
        <div>
            <h3 className="text-[18px] font-poppins text-[#383737]">Seamless Communication Tools 💬</h3>
            <div className="flex flex-col space-y-3 mt-5">
                <p className="text-[#464040]"><span className="text-[#1D1FAD]">Send pitch decks</span> for better understanding</p>
                <p className="text-[#464040]">Ensure<span className="text-[#1D1FAD]"> funding</span> for your event</p>
                <p className="text-[#464040]">Track the process of your sponsorship deal in <span className="text-[#1D1FAD]">real-time</span></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
