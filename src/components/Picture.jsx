import "../Styles/Simulation.css";
import { useDrag } from "react-dnd";

function Picture(props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "img-trash",
    item: { idx: props.idx },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      className="sim-imgs"
      style={{ height: props.height , opacity: isDragging ? 0.5 : 1}}
      src={props.ingredient.path}
      alt={props.ingredient.name}
    ></img>
  );
}

export default Picture;
