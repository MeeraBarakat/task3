import '../Styles/ControlPanel.css';
import map from 'lodash/map';
import findIndex from 'lodash/findIndex';
import find from 'lodash/find';
import Ingredient from "./Ingredient";
import{useDispatch,useSelector} from "react-redux"
import {addIng,setIng} from "../features/burger"
import { useNavigate } from "react-router-dom";
import menu from '../data/Predefined-burgers.json';
import Ingredients from '../data/burger.json';

function ControlPanel() {
    const dispatch=useDispatch();
    const burger= useSelector((state)=>state.burger.value);
    const navigate=useNavigate(null);
    let Ing=[];
    let price=0;

    return (
        <div className="ControlPanel">
            <div style={{width:'100%'}}>
                <span className='header'>
                  Choose a burger from our menu
                </span>
                <select aria-label='Ingredients' className='options' onChange={(e)=> {
                    Ing=[];
                    const burger=find(menu,x => x.name === e.target.value);
                    dispatch(setIng(burger.ingredients));
                }}>
                    <option>choose</option>
                    {map(menu,(burger)=>
                        {
                            return <option key={burger.name} value={burger.name}>{burger.name}</option>
                        })
                    }
                </select>
                <span className='header'>
                    Add Ingredients to your burger
                </span>
                <select aria-label='Ingredients' className='options' onChange={(e)=> dispatch(addIng(e.target.value))}>
                    <option>choose</option>
                    {map(Ingredients,(Ing,idx)=>{
                        if(idx !== 0 && idx !== 1 && findIndex(burger,x => x ===Ing.name) === -1)
                            return<option key={Ing.name} value={Ing.name}>{Ing.name}</option>})
                    }
                </select>
                {map(burger,(ingredientName)=>{
                    if(findIndex(Ing,x => x === ingredientName) === -1)
                     { 
                        Ing.push(ingredientName);
                        return <Ingredient key={ingredientName} ingredientName={ingredientName}/>
                     }})
                }
                <div className='control-price'>Total price:{map(burger,(ingredientName)=>{
                        const burger=find(Ingredients,x => x.name === ingredientName);
                        price+=burger.price
                     })
                } {price+2}₪</div>  
            </div>
            <button className='bt' onClick={()=>{navigate('/order')}}>Finish</button>
        </div>
    );
}

export default ControlPanel;