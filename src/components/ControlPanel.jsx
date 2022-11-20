import { useState } from "react";
import map from 'lodash/map'
import Ingredient from "./Ingredient";

function ControlPanel() {
    const [fillings,setFillings]=useState([]);
    let ingredient="";

    function addFilling(){
        if(!ingredient=='')
        setFillings([...fillings,{name:ingredient,quantity:1}]);
        ingredient="";
    }

    function Inc(c){
        const filling=[...fillings];
        const index=fillings.indexOf(c);
        filling[index]={...c};
        filling[index].quantity++;
        setFillings(filling);
    }

    function dec(c){
        if(c.quantity===1){
            setFillings(fillings.filter(function(obj){
                return obj !== c
            }))
        }
        else{
        const filling=[...fillings];
        const index=fillings.indexOf(c);
        filling[index]={...c};
        filling[index].quantity--;
        setFillings(filling);
        }
    }

    return (
        <div className="ControlPanel">
            <div>
                Please Choose your fillings
            </div>
            <select onChange={(e)=>ingredient=e.target.value}>
             <option>choose</option>
             {fillings.findIndex(x => x.name ==="Meat") === -1 && <option value="Meat">Meat</option>}
             {fillings.findIndex(x => x.name ==="Tomato") === -1 && <option value="Tomato">Tomato</option>}
             {fillings.findIndex(x => x.name ==="Onions") === -1 && <option value="Onions">Onion</option>}
             {fillings.findIndex(x => x.name ==="Lettuce") === -1 && <option value="Lettuce">Lettuce</option>}
             {fillings.findIndex(x => x.name ==="Mushroom") === -1 && <option value="Mushroom">Mushroom</option>}
             {fillings.findIndex(x => x.name ==="Cheese") === -1 && <option value="Cheese">Cheese</option>}
            </select>
            <button onClick={addFilling}>add</button>
            {map(fillings,(fills)=><Ingredient key={fills.name} onInc={Inc} onDec={dec} fills={fills}/>)}
        </div>
    );
}

export default ControlPanel;