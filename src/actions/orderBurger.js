import api from '../api/burger';

export const orderBurger=async(order)=>{
    try{
        const res= await api.post('/order',order);
        return res.data;
    }
    catch(err){
        console.log(err);
    }
}