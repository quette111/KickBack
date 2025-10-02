import { Header } from "../headerfooter/header";
import "../index.css";
import { useParams, useLocation } from "react-router-dom";
//import { products } from "./Products";
import { Footer } from "../headerfooter/footer";
import { FeaturesListHeader, ProductsList } from "../App";
import { IndividualProductCard } from "./ProductCard";
import { Link } from "react-router-dom";
import CartPopup from "../shoppingCart/CartPopup";
import { displayText } from "../shopAll/shopAll";
import { useEffect, useState, useMemo, useCallback } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:33000";

import "../globals.css";
/* import { LocationComponent } from "../IPCall/locationComponent";*/

export const ProductPage = () => {
  const params = useParams();
  const { _id } = params;
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API_BASE}/api/products`);
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const data = await res.json();
        console.log(data);
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("cart:");
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.error("Failed to read cart from localStorage:", err);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart:", JSON.stringify(cart));
    } catch (err) {
      console.error("Failed to save cart to localStorage:", err);
    }
  }, [cart]);
  
  const findProduct = (id) => {
    if (!id) return null;
    return products.find(
      (productItem) => String(productItem._id) === String(id)
    );
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const routeId =
    _id ??
    params.id ??
    params.productId ??
    params.Objectid ??
    params.objectId ??
    null;

  const query = new URLSearchParams(location.search || "");
  const queryId = query.get("_id") ?? query.get("id") ?? null;

  const effectiveId = routeId ?? queryId ?? null;

  const productItem = useMemo(() => {
    if (loading || !effectiveId) return null;
    return findProduct(String(effectiveId));
  }, [effectiveId, products, loading]);

  const handleAddToCart = useCallback(() => {
      if (document.querySelector(".sizeDropdown").value === 0) {
        window.alert("nonigga");
        console.log("huh");
        return
      }
    if (productItem) addToCart(productItem);
  }, [productItem]);

  const handleGetProduct = useCallback(() => {
    return productItem ?? null;
  }, [productItem]);

  if (loading) {
    return (
      <>
        <div className="headerContainer">
          <Header />
        </div>
        <div>Loading product...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="headerContainer">
          <Header />
        </div>
        <div>Error loading products: {error.message}</div>
      </>
    );
  }

  if (!productItem) {
    return (
      <>
        <div className="headerContainer">
          <Header />
        </div>
        <div>Product not found</div>
        <Footer />
      </>
    );
  }
  console.log(productItem.images);

  return (
    <>
      <div className="headerContainer">
        <Header />
      </div>

      <IndividualProductListing
        {...productItem}
        getProduct={handleGetProduct}
        addToCart={handleAddToCart}
      />

      <Footer />
    </>
  );
};

const IndividualProductListing = ({
  brand,
  title,
 images,
  description,
  price,
  children,
  product,
  addToCart,
  getProduct,
  _id,
  id,
}) => {
  //const productId = id ?? _id;
  //const mainImage = images && images.length ? images[0] : null;

  getProduct(_id ?? id);
  const getProducts = (id) => {
    const products = products.find((productItem) => productItem._id === id);
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    if (document.querySelector(".sizeDropdown").value === 0) {
      window.alert('nonigga')
      console.log('huh')
    }

    addToCart(product);
    setShowPopup(true);
  };
  console.log(images);
  console.log(images[0]);
  return (
    <>
      <article className="productListing">
        <div className="productImgCar">
          <img alt={title} src={images[0]} />

          <img alt={title} src={images[1]} />

          <img alt={title} src={images[2]} />
          <img alt={title} src={images[3]} />
        </div>
        <div className="productDescription">
          <h2 className="airMaxTag">EXCLUSIVE</h2>
          <h1> {brand}</h1>
          <h2 className="title">{title}</h2>
          <h6 className="genderTag">Men's</h6>
          <h4 className="priceTag">${price}.00</h4>{" "}
          <SizeDropdown></SizeDropdown>
          <div className="checkoutButtons">
            <button onClick={handleAddToCart} className="addToBagButton">
              Add To Bag
            </button>

            {showPopup && (
              <CartPopup
                shoe={document.querySelector(".title").innerText}
                gender={document.querySelector(".genderTag").innerText}
                price={document.querySelector(".priceTag").innerText}
                message={`${
                  document.querySelector(".title").innerText
                } added to cart!`}
                onClose={() => setShowPopup(false)}
              />
            )}

            <button className="wishlistButton">
              Wishlist <span className="heart">&hearts;</span>
            </button>
          </div>
          <div className="ad">
            <h6>
              Enjoy 20% off Spend over $145 on selected items to get a 20%
              discount at checkout.
            </h6>
          </div>
          <div className="warningMessage">
            <h5>
              <strong>&#9888;&#65039; Important Message:</strong>
              <br></br>
              Your order is not finalized until you've received a shipment
              confirmation email. To checkout faster, please
              <a href="/signin"> Sign In</a>.
            </h5>
          </div>
        </div>
        {children}
      </article>
      <div className="description">
        <h5>{description}</h5>
      </div>
      <FeaturesListHeader />

      <ProductsList></ProductsList>

      {/*
      <section className="productList youMayLikeSection">
   
        {products.map((productItem, index) => {
          return (
            <Link to={`/productPage/${productItem._id}`}>
              <IndividualProductCard
                key={productItem._id}
                {...productItem}
                getProduct={getProduct}
                index={index}
              ></IndividualProductCard>
            </Link>
          );
        })}
      </section>*/}
    </>
  );
};

const SizeDropdown = () => {
  const setSize = (e) => {
    if (e === 0 || e === "0") {
      console.log("error");
    }

    let size = e;
    return size;
  };
  return (
    <div className="sizeDropdownDiv">
      <label for="sizeDropdown">Size:</label>
      <select
        onChange={(e) => setSize(Number(e.target.value))}
        className="sizeDropdown"
        name="sizeDropdown"
      >
        <option value="0">Please select size</option>
        <option value="8">US Men's 8</option>
        <option value="8.5">US Men's 8.5</option>
        <option value="9">US Men's 9</option>
        <option value="9.5">US Men's 9.5</option>
        <option value="10">US Men's 10</option>
        <option value="10.5">US Men's 10.5</option>
        <option value="11">US Men's 11</option>
        <option value="11.5">US Men's 11.5</option>
        <option value="12">US Men's 12</option>
        <option value="12.5">US Men's 12.5</option>
        <option value="13">US Men's 13</option>
      </select>
    </div>
  );
};

export default ProductPage;
