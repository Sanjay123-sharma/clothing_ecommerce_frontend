import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ApiData=createAsyncThunk('app',async()=>{
    let response=await axios.get('https://fakestoreapi.com/products');
    return response.data
})

export const Slice=createSlice({
    name:'app',
    initialState:{
        loading:false,
        error:null,
        Products:[],
        Cart:[],
    },
    extraReducers:(boiler)=>{
        boiler.addCase(ApiData.pending,(state)=>{
            state.loading=true
        }).addCase(ApiData.fulfilled,(state,action)=>{
            state.Products=action.payload
        }).addCase(ApiData.rejected,(state,action)=>{
            state.error=action.payload.error
        })
    },
    reducers:{
        addToCart:(state,action)=>{
            let list=state.Products;
            let Product=list.find((item)=>item?.id==action.payload);
            state.Cart.push({
                id:Product.id,
                title:Product.title,
                price:Product.price,
                count:1
            })


        },
        increment:(state,action)=>{
            let list=state.Cart;
           let res= list.find((item)=>item.id===action.payload);
           if(res){
            res.count=res.count+1
           }
        },
        decrement:(state,action)=>{
            let list=state.Cart;
           let res= list.find((item)=>item.id===action.payload);
           if(res.count<=1){
            console.log("restrict")
           }
           else{
            res.count=res.count-1
           }
        },
    
    }
});


export default Slice.reducer;

export const {addToCart,increment,decrement}=Slice.actions;

