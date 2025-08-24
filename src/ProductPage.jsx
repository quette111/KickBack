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
        title={product.title}
        img={product.img}
        price={product.price}
      />
    </>
  );
};


const IndividualProductListing = ({ title, img, price, children }) => {
  return (
    <article className="productListing">
      <img alt={title} src={img} />
      <h2>{title}</h2>
      <h6>Men's</h6>
      <h4>{price}</h4>
      {children}
    </article>
  );
};

export default ProductPage;
