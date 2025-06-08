'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/images/img_gradient_logo10x_1.png" 
                alt="Sponsorly Logo" 
                width={27} 
                height={25}
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent">
                Sponsorly
              </h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Term of use</p>
              <div className="w-6 h-px bg-gray-400"></div>
              <p>Privacy</p>
              <p className="text-gray-500">Copyright by 2019 Redq.inc</p>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-2xl font-medium text-black mb-6">About Us</h4>
            <div className="space-y-3 text-sm text-black">
              <Link href="#support" className="block hover:text-blue-600">Support Center</Link>
              <Link href="#customer-support" className="block hover:text-blue-600">Customer Support</Link>
              <Link href="#about" className="block hover:text-blue-600">About Us</Link>
              <Link href="#copyright" className="block hover:text-blue-600">Copyright</Link>
            </div>
          </div>

          {/* Our Information */}
          <div>
            <h4 className="text-2xl font-medium text-black mb-6">Our Information</h4>
            <div className="space-y-3 text-sm text-black">
              <Link href="#return-policy" className="block hover:text-blue-600">Return Policy</Link>
              <Link href="#privacy-policy" className="block hover:text-blue-600">Privacy Policy</Link>
              <Link href="#terms" className="block hover:text-blue-600">Terms & Conditions</Link>
              <Link href="#sitemap" className="block hover:text-blue-600">Site Map</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-2xl font-medium text-black mb-6">Contact</h4>
            <div className="space-y-3 text-sm text-black">
              <div className="flex items-center gap-2">
                <Image 
                  src="/images/img_group_indigo_600.svg" 
                  alt="Facebook" 
                  width={20} 
                  height={20}
                />
                <Link href="#facebook" className="hover:text-blue-600">Facebook</Link>
              </div>
              <div className="flex items-center gap-2">
                <Image 
                  src="/images/img_vector.svg" 
                  alt="Twitter" 
                  width={20} 
                  height={16}
                />
                <Link href="#twitter" className="hover:text-blue-600">Twitter</Link>
              </div>
              <div className="flex items-center gap-2">
                <Image 
                  src="/images/img_vector_gray_900_01.svg" 
                  alt="Github" 
                  width={20} 
                  height={19}
                />
                <Link href="#github" className="hover:text-blue-600">Github</Link>
              </div>
              <div className="flex items-center gap-2">
                <Image 
                  src="/images/img_group.svg" 
                  alt="Dribbble" 
                  width={20} 
                  height={19}
                />
                <Link href="#dribbble" className="hover:text-blue-600">Dribble</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;