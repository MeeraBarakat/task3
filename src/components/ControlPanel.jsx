import map from 'lodash/map';
import findIndex from 'lodash/findIndex';
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
    }

    function addIngredient(fills){
        if(findIndex(Ing,x => x.name === fills.name) === -1)
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
             {findIndex(burger,x => x.name ==="beef") === -1 && <option value="beef">Beef</option>}
             {findIndex(burger,x => x.name ==="tomato") === -1 && <option value="tomato">Tomato</option>}
             {findIndex(burger,x => x.name ==="onion") === -1 && <option value="onion">Onion</option>}
             {findIndex(burger,x => x.name ==="lettuce") === -1 && <option value="lettuce">Lettuce</option>}
             {findIndex(burger,x => x.name ==="mushroom") === -1 && <option value="mushroom">Mushroom</option>}
             {findIndex(burger,x => x.name ==="cheese") === -1 && <option value="cheese">Cheese</option>}
             {findIndex(burger,x => x.name ==="leaf") === -1 && <option value="leaf">Leaf</option>}
            </select>
            <button className='button' onClick={addFilling}>add</button>
            {map(burger,(fills)=>addIngredient(fills)
            )}
        </div>
    );
}

export default ControlPanel;