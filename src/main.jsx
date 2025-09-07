import './index.css'
import App from './App.jsx'
import ProductPage from './ProductPage.jsx'
import ShopAll from './shopAll.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ShoppingCart } from './shoppingCart.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/productPage/:id", element: <ProductPage /> },
  { path: "/shopAll/:category", element: <ShopAll /> },
  { path: "/cart", element: <ShoppingCart />}

  /*,
  { path: "/products", element: <Products /> },
  { path: "/mens", element: <Mens /> },
  { path: "/womens", element: <Womens /> },
  { path: "/cart", element: <Cart /> },*/
]);

root.render(
  //<React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>
); 