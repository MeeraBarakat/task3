import "../Styles/ControlPanel.css";
import { find, every, map } from "lodash";
import Ingredient from "./Ingredient";
import { useDispatch, useSelector } from "react-redux";
import { setIng } from "../features/burger";
import { useNavigate } from "react-router-dom";
import { fetchIngredients } from "../actions/fetchIngredients";
import { useEffect, useState } from "react";
import api from "../api/burger";

function ControlPanel() {
  const dispatch = useDispatch();
  const burger = useSelector((state) => state.burger.value);
  const Ingredients = useSelector((state) => state.ingredients.value);
  const navigate = useNavigate(null);
  const [menu, setMenu] = useState([]);
  let price = 2;

  const fetchMenu = async () => {
    try {
      const res = await api.get("/menu");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMenu().then((data) => setMenu(data));
    dispatch(fetchIngredients());
  }, [dispatch]);

  const compareArrays = (array1, array2) => {
    if (array1.length !== array2.length) {
      return false;
    }
    const arr1 = array1.concat().sort();
    const arr2 = array2.concat().sort();
    return every(arr1, (val, idx) => val === arr2[idx]);
  };

  return (
    <div className="ControlPanel">
      <div style={{ width: "100%" }}>
        <span className="header">Choose a burger from our menu</span>

        <div style={{ display: "flex" }}>
          {map(menu, (thisBurger) => {
            return (
              <div
                key={thisBurger.id}
                style={{
                  backgroundImage: "url(" + thisBurger.path + ")",
                  border: compareArrays(burger, thisBurger.ingredients)
                    ? "4px solid rgb(15, 125, 235)"
                    : 0,
                }}
                className="Cart"
              >
                <div className="details">
                  {thisBurger.name}
                  <div className="burger-info">
                    {thisBurger.ingredients.join(", ")}
                    <div style={{ marginTop: "5px" }}>{thisBurger.price}₪</div>
                  </div>

                  <button
                    className="choose-btn"
                    onClick={() => {
                      dispatch(setIng(thisBurger.ingredients));
                    }}
                  >
                    Choose
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <span className="header">Add Ingredients to your burger</span>

        {map(Ingredients, (thisIngredient, idx) => {
          if (idx !== 0 && idx !== 1)
            return (
              <Ingredient
                key={thisIngredient.name}
                Ingredient={thisIngredient}
              />
            );
        })}

        <div className="control-price">
          Total price:
          {map(burger, (ingredientName) => {
            const theburger = find(
              Ingredients,
              (x) => x.name === ingredientName
            );
            if (theburger) price += theburger.price;
          })}
          {price}₪
        </div>
      </div>
      <div>
      <button
        className="bt"
        onClick={() => {
          navigate("/order");
        }}
      >
        Finish
      </button>
      <button className="bt" style={{backgroundColor:'rgb(255,57,57)'}} onClick={() => dispatch(setIng([]))}>
          Clear
        </button>
        </div>
    </div>
  );
}

export default ControlPanel;
