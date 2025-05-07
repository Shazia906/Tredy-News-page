import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-900 text-white py-10">
      <div className="padding">
        <div className="flex flex-wrap text-center xl:text-left">
          <div className="w-full md:w-1/4">
            <h5 className="mb-2 font-bold">Trendy Newspaper</h5>
            <p className="text-sm">
              Stay up-to-date with the latest news and trends. We provide the most accurate and reliable news coverage.
            </p>
            <ul className="text-sm mt-4">
              <li className="hover:text-gray-400 cursor-pointer">About Us</li>
              <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
              <li className="hover:text-gray-400 cursor-pointer">Careers</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h5 className="mb-2 font-bold">News Categories</h5>
            <ul className="text-sm">
              <li className="hover:text-gray-400 cursor-pointer">Politics</li>
              <li className="hover:text-gray-400 cursor-pointer">Business</li>
              <li className="hover:text-gray-400 cursor-pointer">Sports</li>
              <li className="hover:text-gray-400 cursor-pointer">Entertainment</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h5 className="mb-2 font-bold">Quick Links</h5>
            <ul className="text-sm">
              <li className="hover:text-gray-400 cursor-pointer">Home</li>
              <li className="hover:text-gray-400 cursor-pointer">News</li>
              <li className="hover:text-gray-400 cursor-pointer">Archive</li>
              <li className="hover:text-gray-400 cursor-pointer">Sitemap</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h5 className="mb-2 font-bold">Follow Us</h5>
            <ul className="text-sm">
              <li className="hover:text-gray-400 cursor-pointer">Facebook</li>
              <li className="hover:text-gray-400 cursor-pointer">Twitter</li>
              <li className="hover:text-gray-400 cursor-pointer">Instagram</li>
              <li className="hover:text-gray-400 cursor-pointer">LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">{new Date().getFullYear()} Trendy Newspaper. All rights reserved.</p>
        </div>
        <div className="text-center mt-3">
          <p className="text-sm">
            Designed and developed by <span className="hover:text-gray-400 cursor-pointer">Your Company</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
