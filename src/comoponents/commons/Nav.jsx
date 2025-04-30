import React from "react";
import { Newspaper, Search, Menu, X } from "lucide-react";
import Typography from "../Typhography";
import { Link } from "react-router-dom";

const Navbar = ({ search, handleInput, handleSubmit, handleSearch, isOpen, setIsOpen }) => {
  return (
    <div className="w-full shadow-lg shadow-zinc-200 bg-sky-800 text-white">
      <nav className="flex justify-between max-w-[1280px] mx-auto p-4">
        <div className="flex items-center gap-2">
          <Newspaper className="w-6 h-6 text-blue-600" />
          <Typography variant="h3" className="text-lg sm:text-xl">
            DailyNews
          </Typography>
        </div>

        {/* Desktop View */}
        <div className="md:flex hidden items-center gap-5">
          <Link className="px-3 py-4 font-bold text-[18px]" to="/">Home</Link>
          <Link className="px-3 py-4 font-bold text-[18px]" to="/category">Category</Link>
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={search}
              onChange={handleInput}
              placeholder="Search..."
              className="pl-2 pr-10 text-[18px] py-2 rounded-full border border-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search
              onClick={handleSubmit}
              className="absolute right-2 top-3.5 w-5 h-5 text-white cursor-pointer"
            />
          </form>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile View */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center md:gap-4 p-4 bg-sky-800">
          <Link className="px-3 py-3 font-bold text-[18px]" to="/home">Home</Link>
          <Link className="px-3 py-3 font-bold text-[18px]" to="/category">Category</Link>
          <form onSubmit={handleSubmit} className="relative w-full">
            <input
              type="text"
              value={search}
              onChange={handleInput}
              placeholder="Search..."
              className="pl-2 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            />
            <Search
              onClick={handleSearch}
              className="absolute right-2 top-3 w-4 h-4 text-gray-400 cursor-pointer"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Navbar;
