import '../Styles/Order.css';
import{useSelector} from "react-redux";
import { map } from 'lodash';
import { fetchIngredients } from '../features/apis';
import { useEffect, useState } from 'react';

function Order() {
    const burger= useSelector((state)=>state.burger.value);
    let price=2;
    const [Ingredients,setIngredients]=useState([]);
    
    useEffect(()=>{
        fetchIngredients().then(data=>{
            setIngredients(data);
        });
    },[]);

    const count=(Ingredient)=>{
        if(Ingredient.name==='bread-top' || Ingredient.name==='bread-bottom')
            return 1;
        const count = burger.reduce(function(n, val) {return n + (val === Ingredient.name)},0);
        price+=count*Ingredient.price;
        return count; 
    }

    return (
        <div className='all'>
        <div className="burger">
            <div className='Burger-created-title'>
                Your burger is created
            </div>
                <div className='price-Ing-title'>Burger ingredients:</div>
                <div>
                {map(Ingredients,Ingredient=>{
                    return <div className='ingredient-container' key={Ingredient.id}><img className='order-image' key={Ingredient.id} 
                                src={Ingredient.path} alt={Ingredient.name} />{Ingredient.name} {count(Ingredient)}</div>  
                })}
                </div>
            <div className='price-Ing-title'>Total price: {price}₪</div>             
            <button className='order-button'>Order</button>
        </div>
        </div>
     );
}

export default Order;