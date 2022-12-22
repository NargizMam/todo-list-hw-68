import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

interface TaskInfoSlice{
    title: string,
    status: boolean,
    loading: boolean,
    error: boolean
}
const  initialState: TaskInfoSlice =  {
    title: '',
    status: false,
    loading: false,
    error: false
};


export const taskInfoSlice = createSlice({
    name: 'taskInfo',
    initialState,
    reducers: {
    },
    extraReducers: {

    }
});
export const selectTaskTitle = (state: RootState) => state.taskInfo.title;
export const taskInfoReducer = taskInfoSlice.reducer;
