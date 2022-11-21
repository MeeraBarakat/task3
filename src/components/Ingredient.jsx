import tomato from "../images/tomato.svg";
import beef from "../images/beef.svg";
import onion from "../images/onion.svg";
import lettuce from "../images/lettuce.svg";
import cheese from "../images/cheese.svg";
import mushroom from "../images/mushroom.svg";
import leaf from "../images/leaf.svg";
import { useState } from "react";
import{useDispatch,useSelector} from "react-redux";
import {addIng,removeIng} from "../features/burger";

function Ingredient(props) {
    const burger= useSelector((state)=>state.burger.value);
    const [count,setCount]=useState(1);
    const dispatch=useDispatch();

    function Inc(c){
        dispatch(addIng(c));
        setCount(count+1);
    }

    function Dec(c){
        const idx=burger.findLastIndex(x => x.name === c.name);
        dispatch(removeIng(idx));
        setCount(count-1);
    }

    return ( 
        <div className="Ingredient">
            {props.fills.name === 'Tomato' && <img className="ContolPanelImage" src={tomato} alt="Tomato"></img>}
            {props.fills.name === 'Meat' && <img className="ContolPanelImage" src={beef} alt="Meat"></img>}
            {props.fills.name === 'Onions' && <img className="ContolPanelImage" src={onion} alt="Onions"></img>}
            {props.fills.name === 'Cheese' && <img className="ContolPanelImage" src={cheese} alt="Cheese"></img>}
            {props.fills.name === 'Lettuce' && <img className="ContolPanelImage" src={lettuce} alt="Lettuce"></img>}
            {props.fills.name === 'Mushroom' && <img className="ContolPanelImage" src={mushroom} alt="Mushroom"></img>}
            {props.fills.name === 'Leaf' && <img className="ContolPanelImage" src={leaf} alt="Leaf"></img>}
            <span className="title">{count} {props.fills.name}</span>
            {props.fills.name !=='bread' && <div className="control">
            <button className="buttons" onClick={()=>Inc(props.fills)}>+</button>
            <button className="buttons" onClick={()=>Dec(props.fills)}>-</button>
            </div>
            }

        </div>
     );
}

export default Ingredient;