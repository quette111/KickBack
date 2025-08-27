import { Header } from "./header";
import "./index.css";
import { useParams } from "react-router-dom";
import { products } from "./Products";

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
      <h4>{price}</h4></div>
      {children}
    </article>
  );
};

export default ProductPage;
