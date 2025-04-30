
import React from "react";
import Typography from "../Typhography";

const Footer = () => {
  return (
    <footer className="bg-sky-900  text-white py-10">
      <div className="padding">
        <div className="flex flex-wrap  text-center xl:text-left">
          <div className="w-full md:w-1/4">
            <Typography variant="h5" className="mb-2 font-bold">
              Trendy Newspaper
            </Typography>
            <Typography variant="p" className="text-sm">
              Stay up-to-date with the latest news and trends. We provide the most accurate and reliable news coverage.
            </Typography>
            <ul className="text-sm mt-4">
              <li>
                <Typography variant="span" className="hover:text-gray-400 cursor-pointer">
                  About Us
                </Typography>
              </li>
              <li>
                <Typography variant="span" className="hover:text-gray-400 cursor-pointer">
                  Contact Us
                </Typography>
              </li>
              <li>
                <Typography variant="span" className="hover:text-gray-400 cursor-pointer">
                  Careers
                </Typography>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 ">
            <Typography variant="h5" className="mb-2 font-bold">
              News Categories
            </Typography>
            <ul className="text-sm">
              <li>
                <Typography variant="span" className="hover:text-gray-400 cursor-pointer">
                  Politics
                </Typography>
              </li>
              <li>
                <Typography variant="span" className="hover:text-gray-400 cursor-pointer">
                  Business
                </Typography>
              </li>
              <li>
                <Typography variant="span" className="hover:text-gray-400 cursor-pointer">
                  Sports
                </Typography>
              </li>
              <li>
                <Typography variant="span" className="hover:text-gray-400 cursor-pointer">
                  Entertainment
                </Typography>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 ">
            <Typography variant="h5" className="mb-2 font-bold">
              Quick Links
            </Typography>
            <ul className="text-sm">
              <li>
                <Typography variant="span" className="hover:text-gray-400 cursor-pointer">
                  Home
                </Typography>
              </li>
              <li>
                <Typography variant="span" className="hover:text-gray-400 cursor-pointer">
                  News
                </Typography>
              </li>
              <li>
                <Typography variant="span" className="hover:text-gray-400 cursor-pointer">
                  Archive
                </Typography>
              </li>
              <li>
                <Typography variant="span" className="hover:text-gray-400 cursor-pointer">
                  Sitemap
                </Typography>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 ">
            <Typography variant="h5" className="mb-2 font-bold">
              Follow Us
            </Typography>
            <ul className="text-sm">
              <li>
                <Typography variant="span" className="hover:text-gray-400 cursor-pointer">
                  Facebook
                </Typography>
              </li>
              <li>
                <Typography variant="span" className="hover:text-gray-400 cursor-pointer">
                  Twitter
                </Typography>
              </li>
              <li>
                <Typography variant="span" className="hover:text-gray-400 cursor-pointer">
                  Instagram
                </Typography>
              </li>
              <li>
                <Typography variant="span" className="hover:text-gray-400 cursor-pointer">
                  LinkedIn
                </Typography>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <Typography variant="body2" className="text-sm">
             {new Date().getFullYear()} Trendy Newspaper. All rights reserved.
          </Typography>
        </div>
        <div className="text-center mt-3">
          <Typography variant="body2" className="text-sm">
            Designed and developed by{" "} 
                <Typography variant="span" className="hover:text-gray-400 cursor-pointer">
              Your Company
            </Typography>
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer