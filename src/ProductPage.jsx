import { Header } from "./header";
import "./index.css";
import { useParams } from "react-router-dom";
import { products } from "./Products";
import { Footer } from "./footer";

const ProductPage = () => {
  const { id } = useParams();


  const product = products.find(
    (productItem) => productItem.id.toString() === id
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
        price={product.price}
      />
      <Footer></Footer>
    </>
  );
};


const IndividualProductListing = ({brand, title, img, price, children }) => {
  return (
    <article className="productListing">
      <div>
        <img alt={title} src={img} />
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
      </div>
      {children}
    </article>
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
