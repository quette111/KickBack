import { Header } from "./header";
import "./index.css";
import { useParams } from "react-router-dom";
import { products } from "./Products";
import { Footer } from "./footer";
import { FeaturesListHeader } from "./App";
import { IndividualProductCard } from "./ProductCard";
import { Link } from "react-router-dom";
import './globals.css'

const ProductPage = () => {
  const { _id } = useParams();


  const product = products.find(
    (productItem) => productItem._id === _id
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <div className="headerContainer">
        <Header />
      </div>

      <IndividualProductListing
        brand={product.brand}
        title={product.title}
        img={product.img}
        img2={product.img2}
        img3={product.img3}
        img4={product.img4}
        price={product.price}
        description={product.description}
      />
      <Footer></Footer>
    </>
  );
};


const IndividualProductListing = ({brand, title, img, img2, img3, img4, description, price, children }) => {

    const getProduct = (id) => {
      const products = products.find((productItem) => productItem._id === id);
    };
  return (
    <>
      <article className="productListing">
        <div className="productImgCar">
          <img alt={title} src={img} />

          <img alt={title} src={img2} />

          <img alt={title} src={img3} />
          <img alt={title} src={img4} />
        </div>
        <div className="productDescription">
          <h2 className="airMaxTag">EXCLUSIVE</h2>
          <h1>{brand}</h1>
          <h2>{title}</h2>
          <h6>Men's</h6>
          <h4>{price}</h4> <SizeDropdown></SizeDropdown>
          <div className="checkoutButtons">
            <button className="addToBagButton">Add To Bag</button>
            <button className="wishlistButton">
              Wishlist <span class="heart">&hearts;</span>
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

      <section className="productList youMayLikeSection">
        {/*<EventExamples></EventExamples>*/}
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
      </section>
    </>
  );
};

const SizeDropdown = () => {

    return (
      <div className="sizeDropdownDiv">
        <label for="sizeDropdown">Size:</label>
        <select id="sizeDropdown" name="sizeDropdown">
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
}

export default ProductPage;
