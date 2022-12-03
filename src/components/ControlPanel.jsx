import '../Styles/ControlPanel.css';
import {findIndex,find,every,map} from 'lodash';
import Ingredient from "./Ingredient";
import{useDispatch,useSelector} from "react-redux";
import {addIng,setIng} from "../features/burger";
import { useNavigate } from "react-router-dom";
import { fetchIngredients } from '../actions/fetchIngredients';
import { fetchMenu } from '../actions/fetchMenu';
import { useEffect, useState } from 'react';

function ControlPanel() {
    const dispatch=useDispatch();
    const burger= useSelector((state)=>state.burger.value);
    const Ingredients= useSelector((state)=>state.ingredients.value);
    const navigate=useNavigate(null);
    const [menu,setMenu]=useState([]);
    let Ing=[];
    let price=2;

    useEffect(()=>{
        fetchMenu().then(data=>setMenu(data));
        dispatch(fetchIngredients());
    },[dispatch]);
    
    const compareArrays = (array1, array2)=> {
        if (array1.length !== array2.length) {
            return false;
          }
        const arr1 = array1.concat().sort();
        const arr2 = array2.concat().sort();
        return every(arr1,(val,idx)=>val===arr2[idx]);
    }

    return (
        <div className="ControlPanel">
            <div style={{width:'100%'}}>
                <span className='header'>
                  Choose a burger from our menu
                </span>  
                <div style={{display:'flex'}}>
                {map(menu,(thisBurger)=>
                        {  
                            return <div key={thisBurger.id} style={{backgroundImage: "url("+thisBurger.path+")",
                                        border:compareArrays(burger,thisBurger.ingredients) ? '4px solid rgb(15, 125, 235)' :0}} className='Cart'>
                                      <div className='details'>{thisBurger.name}
                                        <div className='burger-info'>{thisBurger.ingredients.join(', ')}<div style={{marginTop:'5px'}}>{thisBurger.price}₪</div></div>
                                            <button className='choose-btn' onClick={()=>{
                                                Ing=[];
                                                dispatch(setIng(thisBurger.ingredients));
                                             }}>Choose</button></div></div>
                        })
                    }
                </div>
                <span style={{marginTop:'10px'}} className='header'>
                    Add Ingredients to your burger
                </span>
                <select aria-label='Ingredients' className='options' onChange={(e)=> {dispatch(addIng(e.target.value))}}>
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
                        return <Ingredient key={ingredientName} Ingredient={find(Ingredients,x => x.name === ingredientName)}/>
                     }})
                }
                <div className='control-price'>Total price:{map(burger,(ingredientName)=>{
                        const theburger=find(Ingredients,x => x.name === ingredientName);
                        if(theburger) price+=theburger.price;
                     })
                } {price}₪</div>  
            </div>
            <button className='bt' onClick={()=>{navigate('/order')}}>Finish</button>
        </div>
    );
}

export default ControlPanel;