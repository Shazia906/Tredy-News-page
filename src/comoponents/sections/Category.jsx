
import React, { useEffect, useState } from "react";
import Navbar from "../commons/Nav";
import Footer from "../commons/Footer";
import HomeCard from "../commons/cards";
import Pagination from "../commons/pagination";

const categories = [
  { id: 1, name: "General" },
  { id: 2, name: "Business" },
  { id: 3, name: "Sports" },
  { id: 4, name: "Entertainment" },
  { id: 5, name: "Technology" },
  { id: 6, name: "Health" },
  { id: 7, name: "Science" },
];

const Category = () => {
  const [search, setSearch] = useState("General");
  const [currentQuery, setCurrentQuery] = useState("General");
  const [newsData, setNewsData] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 8;
  const maxPagesToShow = 10;
  const totalPages = Math.min(Math.ceil(totalResults / pageSize), maxPagesToShow);

  const API_KEY = "b224962a65ed4719b2d2bf924359afaf";

  const getData = async (query, page = 1) => {
    if (!query) return;
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`
      );
      const data = await response.json();
      setNewsData(data.articles || []);
      setTotalResults(data.totalResults || 0);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search !== "") {
      setCurrentQuery(search);
      setSearch(search);
      setCurrentPage(1);
      getData(search, 1);
    }
  };

  const handleCategoryClick = (category) => {
    setSearch(category);
    setCurrentQuery(category);
    setCurrentPage(1);
    getData(category, 1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getData(currentQuery, page);
    window.scrollTo({ top: 0, behavior: "smooth" });

  };

  useEffect(() => {
    getData(currentQuery, currentPage);
  }, []);

  return (
    <section>
      <Navbar
        search={search}
        handleInput={handleInputChange}
        handleSubmit={handleSubmit}
        // handleSearch={() => {
        //   if (search !== "") {
        //     setCurrentQuery(search);
        //     setCurrentPage(1);
        //     getData(search, 1);
        //   }
        // }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="flex pat gap-5 padding md:justify-center items-center overflow-x-auto [scrollbar-width:none]">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            className={`px-4 py-3 text-[18px] text-nowrap flex-wrap rounded-[15px] font-bold ${
              currentQuery === category.name ? "bg-black text-white" : "bg-red-600 text-white"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {isLoading ? (
        <p className="text-center text-lg font-semibold py-10">Loading news...</p>
      ) : (
        <>
          <HomeCard data={newsData} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}

      <Footer />
    </section>
  );
};

export default Category;
