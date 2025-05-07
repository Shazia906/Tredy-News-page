import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./comoponents/sections/Home";
import Category from "./comoponents/sections/Category";
import PricingSection from "./comoponents/sections/BestPlanForBuisness";
import Navbar from "./comoponents/commons/Nav";
import Footer from "./comoponents/commons/Footer";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-[200vh] bg-gray-100">
        <Navbar />     
        <div className="flex-grow flex flex-col bg-blue-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/price" element={<PricingSection />} />
          </Routes>
        </div>

        {/* Footer - Fixed Height */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
