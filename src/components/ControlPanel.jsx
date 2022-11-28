import '../Styles/ControlPanel.css';
import map from 'lodash/map';
import findIndex from 'lodash/findIndex';
import find from 'lodash/find';
import Ingredient from "./Ingredient";
import{useDispatch,useSelector} from "react-redux";
import {addIng,setIng} from "../features/burger";
import { useNavigate } from "react-router-dom";
import menu from '../data/Predefined-burgers.json';
import Ingredients from '../data/burger.json';

function ControlPanel() {
    const dispatch=useDispatch();
    const burger= useSelector((state)=>state.burger.value);
    const navigate=useNavigate(null);
    let Ing=[];
    let price=0;
    let myburger='';

    const compareArrays = (_arr1, _arr2)=> {
        if (!Array.isArray(_arr1)|| !Array.isArray(_arr2)|| _arr1.length !== _arr2.length) {
            return false;
          }
        const arr1 = _arr1.concat().sort();
        const arr2 = _arr2.concat().sort();
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
             }
        }
        return true;
    }

    return (
        <div className="ControlPanel">
            <div style={{width:'100%'}}>
                <span className='header'>
                  Choose a burger from our menu
                </span>  
                {map(menu,(burgerr)=>
                        {
                            return <div onClick={()=>{
                                Ing=[];
                                myburger=find(menu,x => x.name === burgerr.name);
                                dispatch(setIng(myburger.ingredients));
                            }} style={{backgroundImage: "url("+burgerr.path+")",
                            border:compareArrays(burger,find(menu,x => x.name === burgerr.name).ingredients) ? '2px solid rgb(15, 125, 235)' :0}} className='Cart'>
                                <span className='burger-name'>{burgerr.name}</span></div>
                        })
                    }
                <span style={{marginTop:'40px'}} className='header'>
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