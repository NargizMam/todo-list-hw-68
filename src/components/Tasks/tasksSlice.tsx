import {createSlice} from "@reduxjs/toolkit";
import {ApiTask, Task} from "../../types";
import {addTask, fetchTasks, fulfillmentTask} from "./tasksThunk";
import {RootState} from "../../app/store";

interface TasksState {
    items: ApiTask[],
    fetchLoading: 'idle'|'pending'|'success'|'failure',

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
            state.fetchLoading = 'success';
            state.items = action.payload;
        });
        builder.addCase(fetchTasks.rejected, (state) => {
            state.fetchLoading = 'failure'
        });
        builder.addCase(addTask.pending, (state) => {
            state.fetchLoading = 'pending'
        });
        builder.addCase(addTask.fulfilled, (state, action) => {
            state.fetchLoading = 'success'
        });
        builder.addCase(addTask.rejected, (state) => {
            state.fetchLoading = 'failure'
        });
        builder.addCase(fulfillmentTask.pending, (state) => {
            state.fetchLoading = 'pending'
        });
        builder.addCase(fulfillmentTask.fulfilled, (state) => {
            state.fetchLoading = 'success'
        });
        builder.addCase(fulfillmentTask.rejected, (state) => {
            state.fetchLoading = 'failure'
        });

    }
});
export const tasksReducer = tasksSlice.reducer;
export const loading = (state: RootState) => state.tasks.fetchLoading;
