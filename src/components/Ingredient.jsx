import '../Styles/Ingredient.css';
import { useState } from "react";
import{useDispatch,useSelector} from "react-redux";
import findLastIndex from 'lodash/findLastIndex';
import find from 'lodash/find';
import {addIng,removeIng} from "../features/burger";
import Ingredients from '../burger.json'

function Ingredient(props) {
    const burger= useSelector((state)=>state.burger.value);
    const [count,setCount]=useState(1);
    const dispatch=useDispatch();
    const Ingredient=find(Ingredients,x => x.name === props.ingredientName);

    return ( 
        <div className="Ingredient">
            <img className="ContolPanelImage" src={Ingredient.path} alt={Ingredient.name}></img>
            <div className="title">{count} {Ingredient.name}</div>
            <div>
                <button className="buttons" onClick={()=>{dispatch(addIng(props.ingredientName));setCount(count+1);}}>+</button>
                <button className="buttons" onClick={()=>{
                     const idx=findLastIndex(burger,x => x === props.ingredientName);
                     dispatch(removeIng(idx));
                     setCount(count-1);}
                }>-</button>  
            </div>
        </div>
     );
}

export default Ingredient;