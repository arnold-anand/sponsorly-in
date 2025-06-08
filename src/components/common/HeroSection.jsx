'use client';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  const handleSignUpClick = () => {
    alert('Sign up functionality coming soon!');
  };

  const handleSeeActionClick = () => {
    alert('See Sponsorly in action - Demo coming soon!');
  };

  return (
    <section className="py-16 px-4 text-center relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-2xl font-normal text-[#02073E] leading-tight mb-6 mt-[30px]">
          Bringing Sponsors, Artists, and Organizers Together
        </h1>
        
        {/* Subheading */}
        <p className="text-md font-light text-[#575757] mb-8">
          Effortless Collaboration For Extraordinary Events
        </p>

        {/* User Avatars */}
        <div className="flex justify-center mb-4">
          <Image 
            src="/images/img_group_93.png" 
            alt="User Avatars" 
            width={210} 
            height={50}
          />
        </div>

        {/* Star Rating */}
        <div className="flex justify-center items-center gap-1 mb-4">
          {[...Array(5)].map((_, index) => (
            <Image 
              key={index}
              src="/images/img_materialsymbolsstar.svg" 
              alt="Star" 
              width={34} 
              height={34}
            />
          ))}
        </div>

        {/* Rating Text */}
        <p className="text-[#575757] mb-8 text-[10px] w-[146px] mx-auto">
          Join Sponsorly & elevate your campus events.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center gap-6 mb-8">
          <Button 
            onClick={handleSignUpClick}
            className="bg-gradient-to-r from-[#104DD2] to-[#08286C] text-white text-sm rounded-lg shadow-lg w-[184px] h-[44px] font-medium"
          >
            Sign Up For Free
          </Button>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;