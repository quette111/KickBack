

export const GenderCard = ({category, genderImg, id }) => {
  return (
  <div className="GenderCardWrapper">
    <article className="GenderCard">
      <img alt={category} src={genderImg}></img>
     
    </article>
     <h2>{category}</h2>
     </div>
  );
};
