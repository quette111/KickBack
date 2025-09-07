import { displayText } from "../shopAll/shopAll";

export const IndividualProductCard = ({
  title,
  images,
  price,
  children,
  getProduct,
  id,
  index,
}) => {
  const displayTitle = () => console.log(title);

  const getSingleBook = () => {
    getProduct(id);
  };
  console.log("hello", title);
  return (
    <article className="productCard">
      <img alt={title} src={images?.[0]}></img>
      <h2>{title}</h2>
      <h6>{displayText}</h6>
      <h4>{price}</h4>
      <h4 className="displayCardEffect exclude">View Product</h4>
      {/*<button onClick={getSingleBook}>display title</button>*/}
      {/*<span className="index">{`#${index + 1}`}</span>*/}
      {children}
    </article>
  );
};
