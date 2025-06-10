import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const listStore = createSlice({
    name: 'list',
    initialState: {
        list: [1, 2, 3],
    },
    reducers: {
        setList(state, action) {
            state.list = action.payload;
        }
    },
});

const { setList } = listStore.actions;

const fetchList = () =>{
    return async (dispatch)=>{
        const res = await axios.get('http://localhost:3050/dataList');
        // console.log(res.data);
        dispatch(setList(res.data));
    }
}
const listReducer = listStore.reducer;
export { fetchList };
export default listReducer;