
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './comoponents/Sections/Home'
import Category from './comoponents/Sections/Category'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
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

