import "../Styles/Simulation.css";
import { useSelector, useDispatch } from "react-redux";
import { map, find } from "lodash";
import { useDrop } from "react-dnd";
import { addIng, removeIng } from "../features/burger";
import Picture from "./Picture";

function Simulation() {
  const burger = useSelector((state) => state.burger.value);
  const Ingredients = useSelector((state) => state.ingredients.value);
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => {
      dispatch(addIng(item.name));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOverTrash }, dropTrash] = useDrop(() => ({
    accept: "img-trash",
    drop: (item) => {
      dispatch(removeIng(item.idx));
    },
    collect: (monitor) => ({
      isOverTrash: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="Simulation">
      <div className="grid-container">
        <div className="inner-container" ref={drop}>
          <img
            className="sim-imgs"
            src={Ingredients[0] ? Ingredients[0].path : ""}
            style={{ height: isOver ? "45px" : "40px" }}
            alt={Ingredients[0] ? Ingredients[0].name : ""}
          ></img>
          {map(burger, (ingredientName, idx) => {
            const Ingredient = find(
              Ingredients,
              (x) => x.name === ingredientName
            );
            if (Ingredient)
              return (
                <Picture
                  ingredient={Ingredient}
                  idx={idx}
                  key={Ingredient.name + idx}
                  height={isOver ? "35px" : "30px"}
                ></Picture>
              );
          })}
          <img
            className="sim-imgs"
            src={Ingredients[1] ? Ingredients[1].path : ""}
            style={{ height: isOver ? "45px" : "40px" }}
            alt={Ingredients[1] ? Ingredients[1].name : ""}
          ></img>
        </div>
        <img
          className="trash"
          src={isOverTrash ? "/images/red-trash.svg" : "/images/trash.svg"}
          style={{ height: "55px" }}
          alt={"trash"}
          ref={dropTrash}
        ></img>
      </div>
    </div>
  );
}

export default Simulation;
