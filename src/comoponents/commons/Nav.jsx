import React from "react";
import { Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full shadow-lg shadow-zinc-200 bg-sky-800 text-white">
      <nav className="flex justify-between max-w-[1280px] mx-auto p-4 flex-wrap max-sm:gap-3">
        <div className="flex items-center gap-3">
          <Newspaper className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg sm:text-xl font-bold">DailyNews</h3> 
        </div>

        {/* Navigation Links */}
        <div className="md:flex items-center gap-5 flex-wrap">
          <Link className="px-3 py-4 font-bold text-[18px]" to="/">Home</Link>
          <Link className="px-3 py-4 font-bold text-[18px]" to="/category">Category</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
