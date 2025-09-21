import { Link, useLocation, useParams } from "react-router-dom";


//import { products } from "./Products";
import { genderData } from "./genderCards/genderCardData";
import { IndividualProductCard } from "./products/ProductCard";
import { GenderCard } from "./genderCards/genderCards";
import { Header } from "./headerfooter/header";
import { Footer } from "./headerfooter/footer";
import { ShopNow } from "./genderCards/genderCards";
import { ShopNowData } from "./genderCards/genderCardData";

//import redirect from "../images/redirect.png";

import { useEffect, useState } from "react";

import "./index.css";
import "./products/productPage.css";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:33000";

const App = () => { 
  
  const getGender = (id) => {
    return genderData.find((g) => g.id === id) || null;
  };

  const getShopNow = (id) => {
    return ShopNowData.find((s) => s.id === id) || null;
  };



  return (
    <>
      <div className="headerContainer">
        <Header />
      </div>

      <Hero />
      <FeaturesListHeader />

   <ProductsList></ProductsList>

      <h1 className="componentCaption">Shop By Category</h1>
      <section className="genderArea">
        {genderData.map((g, index) => (
          <GenderCard
            key={g.id}
            {...g}
            getGender={() => getGender(g.id)}
            index={index}
          />
        ))}
      </section>

      <section className="ShopNowArea">
        {ShopNowData.map((s, index) => (
          <ShopNow
            key={s.id}
            {...s}
            getShopNow={() => getShopNow(s.id)}
            index={index}
          />
        ))}
      </section>

      <Footer />
    </>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h1>
          Hot kicks,<br></br> cooler prices
        </h1>
        <h3>
          Stay fresh this year with the hottest<br></br> trends and must-have
          styles
        </h3>

        <button className="headerRedirect">Shop The Top Picks</button>
      </div>

      <img
        alt="nike"
        src="/images/heroSneaker.png"
        className="heroShoeImg"
      ></img>
      {/*<img></img>
        <img></img>*/}
    </section>
  );
};

export const FeaturesListHeader = () => {
  const scroll = (e) => {
    if (e.currentTarget.className !== "scrollButton") return;

    const productList = document.querySelector(".productList");
    if (!productList) return;

    const children = Array.from(productList.children);
    const scrollLeft = productList.scrollLeft;

    let currentIndex;

    if (e.currentTarget.id === "scrollRight") {
      currentIndex = children.findIndex(
        (child) => child.offsetLeft >= scrollLeft
      );
      const targetIndex = Math.min(currentIndex + 1, children.length - 1);

      children[targetIndex]?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    } else {
      currentIndex =
        children.findLastIndex(
          (child) => child.offsetLeft + child.offsetWidth <= scrollLeft + 1
        ) ?? 0;
      const targetIndex = Math.max(currentIndex, 0);

      children[targetIndex]?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };

  const location = useLocation();
  let displayText = "";
  if (location.pathname === "/") {
    displayText = "Top Pick's";
  } else {
    displayText = "You May Also Like";
  }

  return (
    <div className="header-row">
      <h1>{displayText}</h1>

      <div role="group" aria-label="carousel navigation">
        <button
          className="scrollButton"
          id="scrollLeft"
          onClick={scroll}
          aria-label="Previous"
        >
          <img alt="back" src="/images/arrowB.png" />
        </button>
        <button
          className="scrollButton"
          id="scrollRight"
          onClick={scroll}
          aria-label="Next"
        >
          <img alt="" src="/images/arrowF.png" />
        </button>
      </div>
    </div>
  );
};

export const ProductsList = () => {

  
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

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
    console.log(category)

  const filterByGender = products.filter((item) => {
 
if(window.location.pathname === '/') {
  return
}
    console.log(item.category);

    console.log(
      `this is item.cat: ......${item.category}.... ....this is cat: ...${category}...`
    );
    return item.category === category;
  });

  const getProduct = (id) => {
    if (!id) return null;
    return products.find(
      (productItem) =>
        productItem.id === id ||
        productItem._id === id ||
        String(productItem.id) === String(id)
    );
  };

  const location = useLocation()
  const currentPath = location.pathname;
  const specificPageClass =
    currentPath.includes('productPage') === true ? "youMayLikeSection" : "";
    const specificPageClassTwo =
      currentPath.includes("shopAll") === true
        ? "youMayLikeSection shopAll"
        : "";

  if (loading) return <div className="loading"></div>;

  
  return (
  <section className={`productList ${specificPageClass} ${specificPageClassTwo}`}>
    {products.map((productItem, index) => {
      const idForRoute = productItem.id ?? productItem._id;

      console.log(productItem);
      return (
        <Link to={`/productPage/${idForRoute}`} key={idForRoute}>
          <IndividualProductCard
            {...productItem}
            index={index}
            getProduct={() => getProduct(idForRoute)}
            filterByGender={filterByGender}
          />
        </Link>
      );
    })}
  </section>
  )
}

export default App;
