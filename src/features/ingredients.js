import {createSlice} from '@reduxjs/toolkit';
import { fetchIngredients } from '../actions/fetchIngredients';

const ingredientsSlice=createSlice({
    name:"ingredients",
    initialState:{value:[],isLoading:false},
    extraReducers:{
        [fetchIngredients.pending]:(state)=>{
            state.isLoading=true;
        },
        [fetchIngredients.fulfilled]:(state,action)=>{
            state.isLoading=false;
            if((action.payload))
            state.value=action.payload;
        }
    }
});

export default ingredientsSlice.reducer;