import React from "react";

const Button = ({ onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      <p>Buy Now</p>
    </div>
  );
};

export default Button;
