import '../Styles/ControlPanel.css';
import map from 'lodash/map';
import findIndex from 'lodash/findIndex';
import find from 'lodash/find';
import Ingredient from "./Ingredient";
import{useDispatch,useSelector} from "react-redux"
import {addIng,setIng} from "../features/burger"
import { useNavigate } from "react-router-dom";
import menu from '../Predefined-burgers.json';

function ControlPanel() {
    const dispatch=useDispatch();
    const burger= useSelector((state)=>state.burger.value);
    const navigate=useNavigate(null);
    const Ing=[];

    return (
        <div className="ControlPanel">
            <div>
            <span className='header'>
                Choose a burger from our menu
            </span>
            <select aria-label='Ingredients' className='options' onChange={(e)=> {
                const burger=find(menu,x => x.name === e.target.value);
                dispatch(setIng(burger.ingredients))
            }}>
             <option>choose</option>
             <option value="Classic Burger">Classic Burger</option> 
             <option value="Double Classic Burger">Double Classic Burger</option> 
             <option value="Classic Cheese Burger">Classic Cheese Burger</option>
             <option value="Double Cheese Burger">Double Cheese Burger</option> 
            </select>
            <span className='header'>
                Or please create your burger
            </span>
            <select aria-label='Ingredients' className='options' onChange={(e)=> dispatch(addIng(e.target.value))}>
             <option>choose</option>
             {findIndex(burger,x => x ==="beef") === -1 && <option value="beef">Beef</option>}
             {findIndex(burger,x => x ==="tomato") === -1 && <option value="tomato">Tomato</option>}
             {findIndex(burger,x => x ==="onion") === -1 && <option value="onion">Onion</option>}
             {findIndex(burger,x => x ==="lettuce") === -1 && <option value="lettuce">Lettuce</option>}
             {findIndex(burger,x => x ==="mushroom") === -1 && <option value="mushroom">Mushroom</option>}
             {findIndex(burger,x => x ==="cheese") === -1 && <option value="cheese">Cheese</option>}
             {findIndex(burger,x => x ==="leaf") === -1 && <option value="leaf">Leaf</option>}
            </select>
            {map(burger,(ingredientName)=>{
                 if(findIndex(Ing,x => x === ingredientName) === -1)
                 { 
                  Ing.push(ingredientName);
                  return <Ingredient key={ingredientName} ingredientName={ingredientName}/>
                 }   
            })}
            </div>
            <button className='bt' onClick={()=>{navigate('/order')}}>Finish</button>
        </div>
    );
}

export default ControlPanel;