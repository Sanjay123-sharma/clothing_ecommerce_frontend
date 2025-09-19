import { createSlice } from "@reduxjs/toolkit";

export const Slice=createSlice({
    name:'app',
    initialState:{
        username:'',
        email:'',
        password:'',
        isLoggedIn:false
    },
    reducers:{
        setUserName:(state,action)=>{
            state.username=action.payload
        },
        setEmail:(state,action)=>{
            state.email=action.payload
        },
        setPassword:(state,action)=>{
            state.password=action.payload
        },
        setLogin:(state)=>{
            state.isLoggedIn=true
        },
        setLogout:(state)=>{
            state.isLoggedIn=false
        }
    }
});


export default Slice.reducer;
export const {setUserName,setEmail,setPassword,setLogin,setLogout}=Slice.actions