

export const GenderCard = ({category, genderImg, id }) => {
  return (
    <div className="GenderCardWrapper">
      <article className="GenderCard">
        <img loading="lazy" alt={category} src={genderImg}></img>
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
