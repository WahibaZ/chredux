import {configureStore} from '@reduxjs/toolkit';
import taskReducer from "./reducer/TaskSlice";
const store=configureStore({
    reducer:{
        task:taskReducer,
    },
});
export default store;