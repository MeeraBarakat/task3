import svg from "../images/tomato.svg";

function Ingredient(props) {
    return ( 
        <div className="Ingredient">
            <img id="kk" className="ContolPanelImage" src={svg}></img>
            <span className="title">{props.fills.name}({props.fills.quantity})</span>
            {props.fills.name !=='bread' && <div className="control">
            <button className="buttons" onClick={()=>props.onInc(props.fills)}>+</button>
            <button className="buttons" onClick={()=>props.onDec(props.fills)}>-</button>
            </div>
            }

        </div>
     );
}

export default Ingredient;