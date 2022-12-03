import api from '../api/burger';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchIngredients=createAsyncThunk("/ingredients",async()=>{
    try{
        const res= await api.get('/ingredients');
        return res.data;
    }
    catch(err){
        console.log(err);
    }
});