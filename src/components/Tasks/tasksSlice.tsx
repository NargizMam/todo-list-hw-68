import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ApiTasksList, Task} from "../../types";
import {fetchTasks} from "./tasksThunk";
import axiosApi from "../../axiosApi";

interface TasksState {
    items: Task[],
    fetchLoading: 'idle'|'pending'|'success'|'failure'
}

const initialState: TasksState ={
    items: [],
    fetchLoading: 'idle'
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder ) => {
        builder.addCase(fetchTasks.pending, (state) => {
            state.fetchLoading = 'pending'
        });
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.items = action.payload;
            state.fetchLoading = 'success'
        });
        builder.addCase(fetchTasks.rejected, (state) => {
            state.fetchLoading = 'failure'
        });
    }
});
export const tasksReducer = tasksSlice.reducer;