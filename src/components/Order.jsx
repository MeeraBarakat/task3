import '../Styles/Order.css';
import{useSelector} from "react-redux";
import Ingredients from '../burger.json'
import { map } from 'lodash';

function Order() {
    const burger= useSelector((state)=>state.burger.value);
    let price=2;

    function count(item){
        if(item.name==='bread-top' || item.name==='bread-bottom')
            return 1;
        var count = 0;
        burger.forEach((Ingredient)=>{
            count += Ingredient===item.name ? 1 : 0;
        });
        price+=count*item.price
        return count; 
    }

    return (
        <div className='all'>
        <div className="burger">
            <div className='Burger-created-title'>
                Your burger is created
            </div>
            <div>
                <div className='Ing-title'>Chosen ingredients:</div>
                {map(Ingredients,Ing=>{
                    return <div className='ingredient-container' key={Ing.id}><img className='order-image' key={Ing.id} src={Ing.path} alt={Ing.id} />{Ing.name} {count(Ing)}</div>  
                })}
            </div>
            <div className='price'>
                Total price: {price}₪
            </div>
            <button className='order-button'>Order</button>
        </div>
        </div>
     );
}

export default Order;