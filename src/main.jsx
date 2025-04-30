import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// import './index.css';
// import Root from './App.jsx'; 
// import Home from './comoponents/sections/Home.jsx';
// import Category from './comoponents/sections/Category.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "/category", element: <Category /> },
//       { path: "/home", element: <Home /> },
//     ],
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );