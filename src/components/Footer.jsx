import React from 'react'
import { FaFacebookF, FaInstagram, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaLocationPin } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-blue-500/50 text-black mt-0 pt-2 ">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">
            Holiday Inn 
          </h2>
          <p className="text-sm leading-relaxed">
            Discover unforgettable stays and experiences with Holiday Inn.
            Your trusted partner for comfortable and memorable travel.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Hotels</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Booking Policy</li>
            <li className="hover:text-white cursor-pointer">Cancellation</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">
            Contact Us
          </h3>
          <p className="text-sm"><FaLocationPin/> Kochi, Kerala, India</p>
          <p className="text-sm mt-2"><FaPhone/> +91 98765 43210</p>
          <p className="text-sm mt-2"><FaMailBulk/> info@holidayinn.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <span className="p-2 bg-white rounded-full hover:bg-teal-500 cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="p-2 bg-white rounded-full hover:bg-teal-500 cursor-pointer">
              <FaInstagram />
            </span>
            <span className="p-2 bg-white rounded-full hover:bg-teal-500 cursor-pointer">
              <FaWhatsapp />
            </span>
            <span className="p-2 bg-white rounded-full hover:bg-teal-500 cursor-pointer">
              <FaTwitter />
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Holiday Inn. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer