import axios from 'axios';

const api=axios.create({
    baseURL:"http://localhost:4000"
});

export const fetchIngredients=async()=>{
    try{
        const res= await api.get('/ingredients');
        return res.data;
    }
    catch(err){
        console.log(err);
    }
}

export const fetchMenu=async()=>{
    try{
        const res= await api.get('/menu');
        return res.data;
    }
    catch(err){
        console.log(err);
    }
}

export const sendBurger=async(order)=>{
    try{
        const res=await api.post('/order',order);
         return res.data;
    }
    catch(err){
        console.log(err);
    }
}
