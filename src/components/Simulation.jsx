import '../Styles/Simulation.css';
import{useSelector,useDispatch} from "react-redux";
import {map,find} from 'lodash';
import { useDrop } from 'react-dnd';
import {addIng} from "../features/burger";

function Simulation() {
    const burger= useSelector((state)=>state.burger.value);
    const Ingredients= useSelector((state)=>state.ingredients.value);
    const dispatch=useDispatch(); 

    const [{isOver},drop]=useDrop(()=>({
        accept:"image",
        drop:(item)=>{
            dispatch(addIng(item.name));
        },
        collect:(monitor)=>({
            isOver:!!monitor.isOver()
        })
    }));

    return ( 
        <div className="Simulation">
            <div className="grid-container">
                <div className="inner-container" ref={drop}>
                    <img className="sim-imgs" src={Ingredients[0] ? Ingredients[0].path : ''} style={{height:'40px'}} alt={Ingredients[0]?Ingredients[0].name:''}></img>
                    {map(
                        burger,(ingredientName,idx)=>{
                        const Ingredient=find(Ingredients,x => x.name === ingredientName);
                        if(Ingredient)
                        return<img className="sim-imgs" style={{height:'30px'}} key={Ingredient.name+idx} src={Ingredient.path} alt={Ingredient.name}></img>})
                    }    
                    <img className="sim-imgs" src={Ingredients[1]?Ingredients[1].path:''} style={{height:'40px'}} alt={Ingredients[1]?Ingredients[1].name:''}></img>
                </div>
            </div>
        </div>
     );
}

export default Simulation;