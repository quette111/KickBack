import { Link } from "react-router-dom";

export const GenderCard = ({category, genderImg, link, id }) => {
  return (
    <div className="GenderCardWrapper">
      <article className="GenderCard">
      <Link to={`/shopAll/${link}`}>
        <img loading="lazy" alt={category} src={genderImg}></img>
        </Link>
      </article>
      <h2 className="gender-title" tabIndex={0}>
        {category}
      </h2>
    </div>
  );
};


export const ShopNow = ({ category, shopNowImg, id }) => {
  return (
    <div className="ShopNowWrapper">
      <article className="ShopNowCard">
     
        <img loading="lazy" alt={category} src={shopNowImg}></img>
   
      </article>
      <button tabIndex={0} className="hoverButton">{category}</button>
    </div>
  );
};
