import '../Styles/Ingredient.css';
import { useState } from "react";
import{useDispatch,useSelector} from "react-redux";
import findLastIndex from 'lodash/findLastIndex';
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
        const idx=findLastIndex(burger,x => x.name === c.name);
        dispatch(removeIng(idx));
        setCount(count-1);
    }

    return ( 
        <div className="Ingredient">
            <img className="ContolPanelImage" src={`images/${props.fills.name}.svg`} alt={props.fills.name}></img>
            <span className="title">{count} {props.fills.name}</span>
            <div className="control">
                <button className="buttons" onClick={()=>Inc(props.fills)}>+</button>
                <button className="buttons" onClick={()=>Dec(props.fills)}>-</button>
            </div>
        </div>
     );
}

export default Ingredient;