export const IndividualProductCard = ({ title, img, price, children, getProduct, id, index }) => {

    const displayTitle = (() => console.log(title))

    const getSingleBook = () => {
        getProduct(id)
    }

    return (
      <article className="productCard">
        <img alt={title} src={img}></img>
        <h2>{title}</h2>
        <h6>Men's</h6>
        <h4>{price}</h4>
        <h4 className="displayCardEffect exclude">View Product</h4>
        {/*<button onClick={getSingleBook}>display title</button>*/}
        {/*<span className="index">{`#${index + 1}`}</span>*/}
        {children}
      </article>
    );
}

