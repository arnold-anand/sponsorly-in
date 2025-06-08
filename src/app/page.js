"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/common/HeroSection";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import Card from "@/components/ui/Card";
export default function SponsorlyHomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString());
  }, []);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleFilterToggle = () => {
    setFilterOpen(!filterOpen);
  };
  const handleSignUpClick = () => {
    alert("Sign up functionality coming soon!");
  };
  const handleSeeActionClick = () => {
    alert("See Sponsorly in action - Demo coming soon!");
  };
  const handleCreateEventClick = () => {
    alert("Create Event functionality coming soon!");
  };
  const handleApplyClick = (company) => {
    alert(`Applied to ${company}!`);
  };
  const handleSaveClick = (company) => {
    alert(`Saved ${company} for later!`);
  };
  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <HeroSection />
      {/* Main Content */}
      <main className="relative z-10">
        {/** Feature highlights for mobile */}
        <div className="flex flex-wrap gap-2 justify-center lg:hidden">
          {[
            "Seamless Collaboration 💬",
            "Effortless Event management",
            "AI powered matches",
            "Real-time tracking",
            "Send pitch decks",
          ].map((feature, idx) => (
            <div
              key={feature}
              className="bg-[#F5F6FA] px-[11px] py-[16px] text-center rounded-xl"
            >
              <h6 className="text-[#383737] text-xs">{feature}</h6>
            </div>
          ))}
        </div>
        <section className="hidden lg:block py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-xl font-medium text-gray-600 mb-6 flex items-center">
                Find Your Perfect Match 🎯
              </h2>
              <div className="flex gap-4 mb-6">
                <div className="flex-1">
                  <InputField
                    placeholder="Search specific categories"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full"
                  />
                </div>
                <Button
                  onClick={handleFilterToggle}
                  variant="secondary"
                  className="bg-gray-100 text-black px-8"
                >
                  Filter
                </Button>
              </div>
              <div className="text-sm text-blue-600 mb-4">
                AI Powered Recommendations
              </div>
              <div className="text-sm text-gray-600 mb-6">
                Tailored to your needs.
              </div>
              {/* Company Cards */}
              <div className="space-y-4">
                <Card className="p-4 border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 mb-2">NVIDIA</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Engaged in supporting AI/ML workshops.
                      </p>
                      <div className="text-sm text-blue-600">
                        90% Match Score
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="small"
                        onClick={() => handleSaveClick("NVIDIA")}
                      >
                        SAVE
                      </Button>
                      <Button
                        variant="primary"
                        size="small"
                        onClick={() => handleApplyClick("NVIDIA")}
                      >
                        APPLY
                      </Button>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 mb-2">
                        Google AI
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Google AI often sponsors tech-related events
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="small"
                        onClick={() => handleSaveClick("Google AI")}
                      >
                        SAVE
                      </Button>
                      <Button
                        variant="primary"
                        size="small"
                        onClick={() => handleApplyClick("Google AI")}
                      >
                        APPLY
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            {/* Communication Tools Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 bg-gray-50 shadow-lg">
                <div className="mb-6">
                  <Image
                    src="/images/img_mobilechatdark_4.png"
                    alt="Mobile Chat Interface"
                    width={231}
                    height={121}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-700 mb-4">
                  Seamless Communication Tools 💬
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>
                    <span className="text-blue-600 font-medium">
                      Send PPT/ Docs
                    </span>{" "}
                    for better understanding
                  </p>
                  <p>
                    Ensure{" "}
                    <span className="text-blue-600 font-medium">
                      efficient funding for your event
                    </span>
                  </p>
                  <p>
                    Track the progress of your sponsorship deal in{" "}
                    <span className="text-blue-600 font-medium">real-time</span>
                  </p>
                </div>
              </Card>
              <Card className="p-8 bg-gray-50 shadow-lg">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-700 mb-4">
                      Effortless Event Management
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Easily organize and manage your campus events from start
                      to finish with Sponsorly.
                    </p>
                  </div>
                  <Image
                    src="/images/img_alarmclockconceptillustration_1.png"
                    alt="Event Management"
                    width={114}
                    height={105}
                    className="ml-4"
                  />
                </div>
                <Card className="p-4 bg-white border border-gray-200">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/img_ellipse_28.png"
                      alt="User Avatar"
                      width={61}
                      height={61}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium">Get</span>
                        <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent">
                          Verified !
                        </span>
                        <Image
                          src="/images/img_materialsymbolsverifiedoutline.svg"
                          alt="Verified"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-sm text-gray-600">
                        Reach Out If Interested
                      </p>
                    </div>
                    <Image
                      src="/images/img_group_151.svg"
                      alt="Action"
                      width={40}
                      height={40}
                    />
                  </div>
                </Card>
              </Card>
            </div>
          </div>
        </section>
        {/* Funding Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/img_organicflatpeopleaskingquestionsillustration_1.png"
                  alt="People asking questions illustration"
                  width={600}
                  height={488}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-xl font-normal text-black mb-6">
                  Need funding for your campus fest, tech event, or hackathon?
                </h2>
                <h3 className="text-2xl font-semibold text-[#02073E] mb-6">
                  <span className="bg-gradient-to-r from-[#2E1658] to-[#378BD8] bg-clip-text text-transparent">Sponsorly</span> Has You Covered! 🚀
                </h3>
                <p className="text-sm text-gray-600 mb-8">
                  Simplify communication, secure funding, & make your event a
                  reality! ✅
                </p>
                <Button
                  onClick={handleCreateEventClick}
                  className="bg-gradient-to-r from-[#104DD2] to-[#08286C] text-white px-8 py-3 text-xl rounded-[5px]"
                >
                  Create Event !
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-medium text-black text-center mb-4">
              Our Services you will appreciate !
            </h2>
            <p className="text-2xl text-gray-600 text-center mb-16">
              Comprehensive Solutions for Effortless Sponsorship and
              Collaboration
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Efficient Platform */}
              <Card className="bg-gradient-to-br from-blue-200 to-blue-300 p-8 rounded-lg">
                <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mb-8">
                  <Image
                    src="/images/img_gradient_logo10x_1.png"
                    alt="Sponsorly Logo"
                    width={60}
                    height={55}
                  />
                </div>
                <h3 className="text-4xl font-medium text-black mb-6">
                  Efficient Platform
                </h3>
                <p className="text-2xl text-black leading-relaxed">
                  Sponsorly is a centralized platform that brings colleges,
                  sponsors, and artists together for seamless collaboration and
                  event success.
                </p>
              </Card>
              {/* Opportunities */}
              <Card className="bg-white p-8 border border-gray-200">
                <div className="bg-yellow-100 rounded-full w-24 h-24 flex items-center justify-center mb-8">
                  <Image
                    src="/images/img_opportunity.png"
                    alt="Opportunities"
                    width={60}
                    height={60}
                  />
                </div>
                <h3 className="text-2xl font-normal text-gray-700 mb-6">
                  Opportunities
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sponsorly aims to provide a diverse range of opportunities to
                  cater to various events, audiences, and branding goals.
                </p>
              </Card>
              {/* Personalized Matches */}
              <Card className="bg-white p-8 border border-gray-200">
                <div className="bg-pink-100 rounded-full w-24 h-24 flex items-center justify-center mb-8">
                  <Image
                    src="/images/img_programming.png"
                    alt="Programming"
                    width={60}
                    height={60}
                  />
                </div>
                <h3 className="text-2xl font-normal text-gray-700 mb-6">
                  Personalized Matches
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Personalised sponsorship recommendations based on the unique
                  needs and preferences, ensuring best possible matches.
                </p>
              </Card>
              {/* Secure Communication */}
              <Card className="bg-white p-8 border border-gray-200 rounded-tr-lg">
                <div className="bg-purple-100 rounded-full w-24 h-24 flex items-center justify-center mb-8">
                  <Image
                    src="/images/img_speech_bubble.png"
                    alt="Speech Bubble"
                    width={60}
                    height={60}
                  />
                </div>
                <h3 className="text-2xl font-normal text-gray-700 mb-6">
                  Secure Communication
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sponsorly provides chat features for transparent communication
                  and between parties, ensuring clear and organized
                  negotiations.
                </p>
              </Card>
            </div>
          </div>
        </section>
        {/* Collaboration Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-5xl font-semibold text-black mb-8">
                  How We Bring Seamless{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent">
                    Collaboration to Life
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Sponsorly is designed to streamline event planning by
                  connecting students, brands, and artists for seamless
                  collaboration. Whether it is finding sponsors, securing
                  talent, or organizing events, the platform simplifies the
                  entire process, ensuring every partnership leads to
                  successful, impactful events.
                </p>
                <Button
                  onClick={handleSignUpClick}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 text-xl"
                >
                  <Image
                    src="/images/img_gameiconsdiamonds.svg"
                    alt="Diamond Icon"
                    width={40}
                    height={45}
                    className="mr-3"
                  />
                  Sign Up For Free
                </Button>
              </div>
              <div className="space-y-6">
                {/* Testimonial Cards */}
                <Card className="bg-gray-50 p-6 border border-gray-200">
                  <h3 className="text-xl font-normal text-gray-700 mb-6">
                    Reviewing{" "}
                    <span className="font-medium">
                      Different Campuses Simultaneously
                    </span>
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src="/images/img_ellipse_27.png"
                      alt="Josh Profile"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xl font-medium text-black">Josh</h4>
                        <Image
                          src="/images/img_materialsymbolsverifiedoutline.svg"
                          alt="Verified"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-gray-600">Student Council President</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-gray-600">Studying in</span>
                        <span className="bg-purple-200 px-3 py-1 rounded text-black text-sm">
                          IIT Bombay
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Image
                        src="/images/img_group_149.svg"
                        alt="Like"
                        width={40}
                        height={40}
                      />
                      <Image
                        src="/images/img_group_148.svg"
                        alt="Share"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                </Card>
                <Card className="bg-white p-6 border border-gray-200">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/img_ellipse_27_61x61.png"
                      alt="Kiran Profile"
                      width={61}
                      height={61}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xl font-medium text-gray-600">
                          Kiran Patel
                        </h4>
                        <Image
                          src="/images/img_materialsymbolsverifiedoutline.svg"
                          alt="Verified"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-gray-600">
                        TechFest Organizing Committee
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-gray-600">Studying in</span>
                        <span className="bg-blue-100 px-3 py-1 rounded text-gray-600 text-sm">
                          Delhi Technological University
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Image
                        src="/images/img_group_149_white_a700_01.svg"
                        alt="Like"
                        width={41}
                        height={41}
                      />
                      <Image
                        src="/images/img_group_148_gray_200.svg"
                        alt="Share"
                        width={41}
                        height={41}
                      />
                    </div>
                  </div>
                </Card>
                <Card className="bg-gray-50 p-6 border border-gray-200">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/img_ellipse_27_60x60.png"
                      alt="Maya Profile"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xl font-medium text-black">
                          Maya Patel
                        </h4>
                        <Image
                          src="/images/img_materialsymbolsverifiedoutline_blue_700.svg"
                          alt="Verified"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-gray-600">
                        TechFest Organizing Committee
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-gray-600">Studying in</span>
                        <span className="bg-pink-200 px-3 py-1 rounded text-black text-sm">
                          Delhi Technological University
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Image
                        src="/images/img_group_149.svg"
                        alt="Like"
                        width={40}
                        height={40}
                      />
                      <Image
                        src="/images/img_group_148.svg"
                        alt="Share"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        {/* <section className="bg-blue-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white p-16 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-medium text-black mb-8">
                    Reach out to us—let us make great things happen!
                  </h2>
                  <div className="space-y-4">
                    <p className="text-3xl font-medium text-gray-700">
                      example@gmail.com
                    </p>
                    <p className="text-3xl font-medium text-gray-700">
                      9XXXXXXXX
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="relative">
                    <Image
                      src="/images/img_group_74.svg"
                      alt="Contact Illustration"
                      width={249}
                      height={193}
                    />
                    <Image
                      src="/images/img_group_green_a700.svg"
                      alt="Green Accent"
                      width={122}
                      height={181}
                      className="absolute top-2 -left-32"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section> */}
      </main>
      {/* Footer */}
      <Footer />
      {/* Background Rectangle */}
      <div className="absolute bottom-0 left-0 w-full h-[440px] z-0">
        <Image
          src="/images/img_rectangle_49.png"
          alt="Background Rectangle"
          width={1728}
          height={440}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
