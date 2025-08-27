import { Link } from "react-router-dom";

import { products } from "./Products";
import { genderData } from "./genderCardData";
import { IndividualProductCard } from "./ProductCard";
import { GenderCard } from "./genderCards";
import { Header } from "./header";
import { Footer } from "./footer";

import redirect from "./images/redirect.png";
import nike from "./images/heroSneaker.png";
import arrowForward from "./images/arrowF.png";
import arrowBackward from "./images/arrowB.png"

import "./index.css";

const App = () => {
  const getProduct = (id) => {
    const products = products.find((productItem) => productItem.id === id);
  };

  const getGender = (id) => {
    const genderData = genderData.find(
      (genderOption) => genderOption.id === id
    );
  };

  return (
    <>
      <div className="headerContainer">
        <Header></Header>
      </div>

      <Hero />

      <FeaturesListHeader />

      <section className="productList">
        {/*<EventExamples></EventExamples>*/}
        {products.map((productItem, index) => {
          return (
            <Link to={`/productPage/${productItem.id}`}>
              <IndividualProductCard
                key={productItem.id}
                {...productItem}
                getProduct={getProduct}
                index={index}
              ></IndividualProductCard>
            </Link>
          );
        })}
      </section>

        <h1 className="componentCaption">Shop By Category</h1>
      <section className="genderArea">
        {genderData.map((genderData, index) => {
          return (
            <GenderCard
              key={genderData.id}
              {...genderData}
              getGender={getGender}
              index={index}
            ></GenderCard>
          );
        })}
      </section>
      <span className="triangle-down-gradient"></span>
      <Footer></Footer>
    </>
  );
};

const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: "1rem 0" }}
        ></input>
      </form>
      <button
        onClick={() => {
          console.log("click me");
        }}
      >
        click me
      </button>
    </section>
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
          Stay fresh this year with the hottest<br></br> trends and must-have styles
        </h3>
   
          <button className="headerRedirect">Shop The Top Picks</button>
      
      </div>

      <img alt="nike" src={nike} className="heroShoeImg"></img>
      {/*<img></img>
        <img></img>*/}
    </section>
  );
};


const FeaturesListHeader = () => {

  const scroll = (e) => {
    if (e.currentTarget.className !== "scrollButton") return;

    const productList = document.querySelector(".productList");
    if (!productList) return;

    const children = Array.from(productList.children);
    const scrollLeft = productList.scrollLeft;

    let currentIndex;

    if (e.currentTarget.id === "scrollRight") {
      // first child whose left edge is at or beyond current scrollLeft
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

  return (
    <div className="header-row">
      <h1>Top Picks</h1>

      <div role="group" aria-label="carousel navigation">
        <button
          className="scrollButton"
          id="scrollLeft"
          onClick={scroll}
          aria-label="Previous"
        >
          <img alt="" src={arrowBackward} />
        </button>
        <button
          className="scrollButton"
          id="scrollRight"
          onClick={scroll}
          aria-label="Next"
        >
          <img alt="" src={arrowForward} />
        </button>
      </div>
    </div>
  );
}




/*
function Greeting() {
    return React.createElement('h2', {}, 'hello ')
}
*/

export default App;
