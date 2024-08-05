import React from "react";
import Button from "../Button.jsx";

const Food = (props) => {
  const { id, name, url, addToCart } = props;
  const image = url;

  return (
    <div className="foodItem">
      <img src={image} alt={name} />
      <div className="foodItemRight">
        <h2>{name}</h2>
        <div className="itemsLower">
          <h1 className="price"># 5000</h1>
          <Button onClick={() => addToCart({ id, name, url })} />
        </div>
      </div>
    </div>
  );
};

export default Food;
