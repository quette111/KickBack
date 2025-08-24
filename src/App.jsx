import { Link } from "react-router-dom";

import { products } from "./Products";
import { IndividualProductCard } from "./ProductCard";
import { Header } from "./header";

import nike from "./images/heroSneaker.png";

import "./index.css";

const App = () => {
  const getProduct = (id) => {
    const products = products.find((productItem) => productItem.id === id);
  };

  return (
    <>
      <div className="headerContainer">
        <Header></Header>
      </div>

      <Hero />

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
      <img alt="nike" src={nike} className="heroShoeImg"></img>
      {/*<img></img>
        <img></img>*/}
    </section>
  );
};

/*
function Greeting() {
    return React.createElement('h2', {}, 'hello nigga')
}
*/

export default App;
