import {createSlice} from '@reduxjs/toolkit';

const burgerSlice=createSlice({
    name:"burger",
    initialState:{value:[]},
    reducers:{
        addIng:(state,action)=>{
            state.value=[...state.value,action.payload];
        },
        removeIng:(state,action)=>{
            state.value.splice(action.payload,1);
        },
        setIng:(state,action)=>{
            state.value=action.payload;
        }
    },
});

export const {addIng,removeIng,setIng}=burgerSlice.actions;

export default burgerSlice.reducer;