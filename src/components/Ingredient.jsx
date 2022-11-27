import '../Styles/Ingredient.css';
import{useDispatch,useSelector} from "react-redux";
import findLastIndex from 'lodash/findLastIndex';
import find from 'lodash/find';
import {addIng,removeIng} from "../features/burger";
import Ingredients from '../data/burger.json';

function Ingredient(props) {
    const burger= useSelector((state)=>state.burger.value);
    const dispatch=useDispatch();
    const Ingredient=find(Ingredients,x => x.name === props.ingredientName);

    return ( 
        <div className="Ingredient">
            <img className="ContolPanelImage" src={Ingredient.path} alt={Ingredient.name}></img>
            <div className="title">{burger.reduce(function(n, val) {return n + (val === Ingredient.name)},0)} {Ingredient.name}</div>
            <div>
                <button className="buttons" onClick={()=>{dispatch(addIng(Ingredient.name))}}>+</button>
                <button className="buttons" onClick={()=>{
                    const idx=findLastIndex(burger,x => x === Ingredient.name);
                    dispatch(removeIng(idx));
                }}>-</button>  
            </div>
        </div>
     );
}

export default Ingredient;