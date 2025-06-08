'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const Header = () => {
  const handleLoginClick = () => {
    alert('Login functionality coming soon!');
  };

  return (
    <header className="bg-white py-4 px-4 relative z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image 
            src="/images/img_gradient_logo10x_1.png" 
            alt="Sponsorly Logo" 
            width={27} 
            height={25}
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#378BD8] to-[#2E1658] bg-clip-text text-transparent">
            Sponsorly
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-xl text-gray-600 hover:text-blue-600 transition-colors">
            About Us
          </Link>
          <div className="w-px h-7 bg-gray-400"></div>
          <Link href="#brands" className="text-xl text-gray-600 hover:text-blue-600 transition-colors">
            For Brands
          </Link>
          <div className="w-px h-7 bg-gray-400"></div>
          <Link href="#students" className="text-xl text-gray-600 hover:text-blue-600 transition-colors">
            For Students
          </Link>
          <div className="w-px h-7 bg-gray-400"></div>
          <Link href="#artists" className="text-xl text-gray-600 hover:text-blue-600 transition-colors">
            For Artists
          </Link>
        </nav>

        {/* Login Button */}
        <Button 
          onClick={handleLoginClick}
          className="hidden md:flex bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg items-center gap-2"
        >
          <Image 
            src="/images/img_gameiconsdiamonds.svg" 
            alt="Diamond Icon" 
            width={25} 
            height={25}
          />
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;