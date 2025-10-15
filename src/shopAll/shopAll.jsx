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
/*import { LocationComponent } from "../IPCall/locationComponent";*/
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
    displayText = "Jewelry";
  }

  return (
    <>
      <Header></Header>

      <header className="genderLabel">
        <h1>{displayText}</h1>
        <p>
          Shop the latest collection of {displayText} shoes{" "}
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
            <option value="NB">New Balance</option>
            <option value="ON">ON</option>
            <option value="Hoka">Hoka</option>
            <option value="Brooks">Brooks</option>
          </select>
        </div>

        <div>
          <label>Price:</label>
          <select name="price" value={filters.price} onChange={handleChange}>
            <option value="">All</option>
            <option value="0-50"> $100 or less </option>
            <option value="50-100">$101 - $149</option>
            <option value="100-200">$150+</option>
          </select>
        </div>
      </div>

      {/*    <LocationComponent></LocationComponent>*/}
    </section>
  );
};
export default ShopAll;
