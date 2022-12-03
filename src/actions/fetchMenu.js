import api from '../api/burger';

export const fetchMenu=async()=>{
    try{
        const res= await api.get('/menu');
        return res.data;
    }
    catch(err){
        console.log(err);
    }
}