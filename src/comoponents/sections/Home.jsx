import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import HomeCard from "../commons/Cards";
import Pagination from "../commons/pagination";
import  { HomeButtons } from "../Constant/index";

 

const Home = () => {
  const [search, setSearch] = useState("");
  const [currentNews, setCurrentNews] = useState("India");
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const pageSize = 10;
  const maxPagesToShow = 10;
  const totalPages = Math.min(Math.ceil(totalResults / pageSize), maxPagesToShow);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const getData = async (query, page = 1) => {
    if (!query) return;
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`
      );
      const jsonData = await response.json();
      setNewsData(jsonData.articles);
      setTotalResults(jsonData.totalResults || 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setCurrentNews(search);
    getData(search, 1);
  };

  const handleCategoryClick = (name) => {
    setSearch("");
    setCurrentNews(name);
    setCurrentPage(1);
    getData(name, 1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getData(currentNews, page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    getData(currentNews, currentPage);
  }, []);

  return (
    <section>

      {/* Search Bar */}
      <div className="flex justify-center  items-center py-1 mt-15">
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <input
            type="text"
            value={search}
            onChange={handleInput}
            placeholder="Search..."
            className="w-full pl-3 pr-20 rounded-[5px]  py-3 focus:outline-none  border-2 border-black"
          />
          <Search
            onClick={handleSubmit}
            className="absolute right-2 top-4 cursor-pointer w-5 h-5 text-gray-500"
          />
        </form>
      </div>

      {/* Category Buttons */}
      <div className="pat flex gap-5 padding md:justify-center items-center overflow-x-auto [scrollbar-width:none]">
        {HomeButtons.map((news) => (
          <button
            key={news.id}
            onClick={() => handleCategoryClick(news.name)}
            className={`px-4 py-3 text-[18px] flex-wrap rounded-[15px] font-bold ${
              currentNews === news.name ? "bg-black text-white" : "bg-red-600 text-white"
            }`}
          >
            {news.name}
          </button>
        ))}
      </div>

      {/* News Display and Pagination */}
      {isLoading ? (
        <p className="text-center text-lg font-semibold py-10">Data is loading...</p>
      ) : (
        newsData && (
          <>
            <HomeCard data={newsData} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </>
        )
      )}


    </section>
  );
};

export default Home;
