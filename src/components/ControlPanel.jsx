import map from 'lodash/map'
import Ingredient from "./Ingredient";
import{useDispatch,useSelector} from "react-redux"
import {addIng} from "../features/burger"

function ControlPanel() {
    const dispatch=useDispatch();
    const burger= useSelector((state)=>state.burger.value);
    const Ing=[];
    let ingredient="";

    function addFilling(){
        if(ingredient!=="")
        dispatch(addIng({name:ingredient}));
        ingredient="";
    }

    function lis(fills){
        if(Ing.findIndex(x => x.name === fills.name) === -1)
        { 
         Ing.push(fills);
         return <Ingredient key={fills.name} fills={fills}/>
        }             
    }

    return (
        <div className="ControlPanel">
            <span className='header'>
                Please create your burger
            </span>
            <select aria-label='Ingredients' className='options' onChange={(e)=>ingredient=e.target.value}>
             <option>choose</option>
             {burger.findIndex(x => x.name ==="Meat") === -1 && <option value="Meat">Meat</option>}
             {burger.findIndex(x => x.name ==="Tomato") === -1 && <option value="Tomato">Tomato</option>}
             {burger.findIndex(x => x.name ==="Onions") === -1 && <option value="Onions">Onion</option>}
             {burger.findIndex(x => x.name ==="Lettuce") === -1 && <option value="Lettuce">Lettuce</option>}
             {burger.findIndex(x => x.name ==="Mushroom") === -1 && <option value="Mushroom">Mushroom</option>}
             {burger.findIndex(x => x.name ==="Cheese") === -1 && <option value="Cheese">Cheese</option>}
             {burger.findIndex(x => x.name ==="Leaf") === -1 && <option value="Leaf">Leaf</option>}
            </select>
            <button className='button' onClick={addFilling}>add</button>
            {map(burger,(fills)=>lis(fills)
            )}
        </div>
    );
}

export default ControlPanel;