import React from "react";
import "../Styles/Order.css";
import { useSelector } from "react-redux";
import { map } from "lodash";
import api from "../api/burger";

function Order() {
  const burger = useSelector((state) => state.burger.value);
  const Ingredients = useSelector((state) => state.ingredients.value);
  let price = 2;

  const count = (Ingredient) => {
    if (Ingredient.name === "bread-top" || Ingredient.name === "bread-bottom")
      return 1;
    const count = burger.reduce(function (n, val) {
      return n + (val === Ingredient.name);
    }, 0);
    price += count * Ingredient.price;
    return count;
  };

  const orderBurger = async (order) => {
    try {
      const res = await api.post("/order", order);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="all">
      <div className="burger">
        <div className="Burger-created-title">Your burger is created</div>
        <div className="price-Ing-title">Burger ingredients:</div>
        <div>
          {map(Ingredients, (Ingredient) => {
            return (
              <div className="ingredient-container" key={Ingredient.id}>
                <img
                  className="order-image"
                  key={Ingredient.id}
                  src={Ingredient.path}
                  alt={Ingredient.name}
                />
                {Ingredient.name} {count(Ingredient)}
              </div>
            );
          })}
        </div>
        <div className="price-Ing-title">Total price: {price}₪</div>
        <button
          className="order-button"
          onClick={() => {
            orderBurger({ order: burger, price: price });
          }}
        >
          Order
        </button>
      </div>
    </div>
  );
}

export default Order;
