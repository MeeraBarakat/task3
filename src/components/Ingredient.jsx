import '../Styles/Ingredient.css';
import{useDispatch,useSelector} from "react-redux";
import {findLastIndex } from 'lodash';
import {addIng,removeIng} from "../features/burger";

function Ingredient(props) {
    const burger= useSelector((state)=>state.burger.value);
    const dispatch=useDispatch();

    if(props.Ingredient)
        return ( 
            <div className="Ingredient">
                <img className="ContolPanelImage" src={props.Ingredient.path} alt={props.Ingredient.name}></img>
                <div className="title">{burger.reduce(function(n, val) {return n + (val === props.Ingredient.name)},0)} {props.Ingredient.name}</div>
                <div>
                    <button className="buttons" onClick={()=>{dispatch(addIng(props.Ingredient.name))}}>+</button>
                    <button className="buttons" onClick={()=>{
                        const idx=findLastIndex(burger,x => x === props.Ingredient.name);
                        dispatch(removeIng(idx));
                    }}>-</button>  
                </div>
            </div>
        );
}

export default Ingredient;