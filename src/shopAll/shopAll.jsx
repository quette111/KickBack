import { Footer } from "../headerfooter/footer";
import { Header } from "../headerfooter/header";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { IndividualProductCard } from "../products/ProductCard";
import { NotFound } from "../notfound";
import { useLocation } from "react-router-dom";
import { ProductsList } from "../App";
import "./shopAll.css";

import { useEffect, useState } from "react";
import { LocationComponent } from "../IPCall/locationComponent";
const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:33000";

export let displayText = "";

const ShopAll = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/products`);
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const data = await res.json();
        setProducts(data || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const { category } = useParams();

  const getProduct = products.filter(
    (productItem) => productItem.category === category
  );





  if (loading) return <div className="loading"></div>;



  const location = useLocation();

  if (location.pathname === "/shopAll/mens") {
    displayText = "Men's";
  } else if (location.pathname === "/shopAll/womens") {
    displayText = "Women's";
  } else if (location.pathname === "/shopAll/kids") {
    displayText = "Kid's";
  } else {
    displayText = "Other";
  }

  return (
    <>
      <Header></Header>

      <header className="genderLabel">
        <h1>{displayText}</h1>
        <p>
          Shop the latest collection of {displayText} clothing and accessories{" "}
        </p>
      </header>
      <article className="shopAllWrapper">
        <FilterSideBar></FilterSideBar>

<ProductsList></ProductsList>
       
      </article>
      <Footer></Footer>
    </>
  );
};

const FilterSideBar = () => {
  const [filters, setFilters] = useState({
    brand: "",
    color: "",
    price: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };


  console.log(`helloooo quette ${location?.city}`)

  return (
    <section className="filterSection">
      <div className="filterContainer">
        <div>
          <label>Brand:</label>
          <select name="brand" value={filters.brand} onChange={handleChange}>
            <option value="">All</option>
            <option value="nike">Nike</option>
            <option value="adidas">Adidas</option>
            <option value="puma">Puma</option>
          </select>
        </div>

        <div>
          <label>Color:</label>
          <select name="color" value={filters.color} onChange={handleChange}>
            <option value="">All</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="red">Red</option>
          </select>
        </div>

        <div>
          <label>Price:</label>
          <select name="price" value={filters.price} onChange={handleChange}>
            <option value="">All</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
          </select>
        </div>
      </div>

      <LocationComponent></LocationComponent>
      
    </section>
  );
};
export default ShopAll;
