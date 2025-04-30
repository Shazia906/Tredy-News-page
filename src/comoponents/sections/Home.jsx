import React, { useEffect, useState } from "react";
import Navbar from "../Commons/Nav";
import Footer from '../Commons/Footer';
import HomeCard from "../Commons/Cards";
import Pagination from "../Commons/pagination";

const News = [
  { id: 1, name: "Pakistan" },
  { id: 2, name: "England" },
  { id: 3, name: "Germany" },
  { id: 4, name: "India" },
  { id: 5, name: "China" },
  { id: 6, name: "Brazil" },
  { id: 7, name: "Japan" },
]; 

const Home = () => {
  const [search, setSearch] = useState("India");
  const [currentNews, setCurrentNews] = useState("India");
  const [newsData, setNewsData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
 
  const pageSize = 10; 
  const maxPagesToShow = 10;
  const totalPages = Math.min(Math.ceil(totalResults / pageSize) , maxPagesToShow);

  const API_KEY = "b224962a65ed4719b2d2bf924359afaf";

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
      console.log("data articles" , jsonData.totalResults);
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
    getData(search, 1);
    setCurrentNews(search);
  };

  const handleCategoryClick = (name) => {
    setSearch(name);
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
    getData(search, currentPage);
  }, []);


  return (
    <section>
      <Navbar
        search={search}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        // handleSearch={() => {
        //   setCurrentPage(1);
        //   getData(search, 1);
        //   setCurrentNews(search);
        // }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      
      <div className="pat flex gap-5 padding md:justify-center items-center overflow-x-auto [scrollbar-width:none]">
        {News.map((news) => (
          <button
            key={news.id}
            onClick={() => handleCategoryClick(news.name)}
            className={`px-4 py-3 text-[18px] text-nowrap flex-wrap rounded-[15px] font-bold ${
              currentNews === news.name ? "bg-black text-white" : "bg-red-600 text-white"
            }`}
          >
            {news.name}
          </button>
        ))}
      </div>

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

      <Footer />
    </section>
  );
};

export default Home;
