
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './comoponents/sections/Home'
// import Category from './comoponents/sections/Category'
import './index.css'
import PricingSection from './comoponents/sections/BestPlanForBuisness'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PricingSection/>}/>
        {/* <Route path="/" element={<Home />} /> */}
        {/* // <Route path="/category" element={<Category />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;


// App.jsx (or Root.jsx)
// import React from "react";
// import { Outlet } from "react-router-dom";

// const App = () => {
//   return (
//     <div>
//       <Outlet /> 
//     </div>
//   );
// };

// export default App;

