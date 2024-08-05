import React, { useState, useEffect } from "react";
import "./Menu.css";
import Header from "../Header/Header";
import Food from "./Food";
import foods from "../../assets/Datas/foods.json";
import soups from "../../assets/Datas/soups.json";

const Menu = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log("Adding product to cart:", product);
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems, product];
      console.log("Updated cart items:", newCartItems);
      return newCartItems;
    });
  };

  useEffect(() => {
    console.log("Cart items state updated:", cartItems);
  }, [cartItems]);

  return (
    <React.Fragment>
      <Header />
      <div className="menuList">
        <div className="foodWrapper">
          {/* <h2>Foods</h2> */}
          {foods.map((food) => {
            return <Food addToCart={addToCart} key={food.id} {...food} />;
          })}
          {/* <h2>Soups</h2> */}
          {soups.map((soup) => {
            return <Food addToCart={addToCart} key={soup.id} {...soup} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
