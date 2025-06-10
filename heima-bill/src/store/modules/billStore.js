import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const billStore = createSlice({
    name:'bill1',
    initialState:{
        billList:[],
    },
    reducers:{
        setBillList(state,action){
            state.billList = action.payload;
        }
    },


});

const {setBillList} = billStore.actions;

const asyncSetBillList = ()=>{
    return async (dispatch) =>{
        const res = await axios.get('http://localhost:3050/ka');
        dispatch(setBillList(res.data));
    }
}

const billReducer = billStore.reducer;
export {asyncSetBillList};
export default billReducer;