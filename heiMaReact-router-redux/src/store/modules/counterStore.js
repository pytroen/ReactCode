import {createSlice} from '@reduxjs/toolkit'

const counterStore = createSlice({
    name:'counter',
    initialState:{
        count:0,
    },
    reducers:{
        // 可以直接修改
        increase(state){
            state.count++;
        },
        decrease(state){
            state.count--;
        },
        add5(state,action){
            state.count = state.count + action.payload;
        },
        add10(state,action){
            state.count = state.count + action.payload.num;
        }

    },

});

const {increase ,decrease,add5,add10} = counterStore.actions;

const counterReducer = counterStore.reducer;

export {decrease,increase,add5,add10}
export default counterReducer;