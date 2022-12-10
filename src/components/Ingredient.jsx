import "../Styles/Ingredient.css";
import { useDispatch, useSelector } from "react-redux";
import { findIndex } from "lodash";
import { addIng, removeIng } from "../features/burger";
import { useDrag } from "react-dnd";

function Ingredient(props) {
  const burger = useSelector((state) => state.burger.value);
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { name: props.Ingredient.name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  if (props.Ingredient)
    return (
      <div
        className="Ingredient"
        style={{ border: isDragging ? "2px solid gainsboro" : "0" }}
      >
        <img
          ref={drag}
          className="ContolPanelImage"
          src={props.Ingredient.path}
          alt={props.Ingredient.name}
          style={{ opacity: isDragging ? "0.5" : "1" }}
        ></img>
        <div className="title">
          {burger.reduce(function (n, val) {
            return n + (val === props.Ingredient.name);
          }, 0)}{" "}
          {props.Ingredient.name}
        </div>
        <div>
          <button
            className="buttons"
            onClick={() => {
              dispatch(addIng(props.Ingredient.name));
            }}
          >
            +
          </button>
          <button
            className="buttons"
            onClick={() => {
              const idx = findIndex(burger, (x) => x === props.Ingredient.name);
              dispatch(removeIng(idx));
            }}
          >
            -
          </button>
        </div>
      </div>
    );
}

export default Ingredient;
