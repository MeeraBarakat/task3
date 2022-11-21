import {createSlice} from '@reduxjs/toolkit';

const userSlice=createSlice({
    name:"burger",
    initialState:{value:[]},
    reducers:{
        addIng:(state,action)=>{
            state.value=[...state.value,action.payload];
        },
        removeIng:(state,action)=>{
            state.value.splice(action.payload,1);
        }
    },
});

export const {addIng,removeIng}=userSlice.actions;

export default userSlice.reducer;