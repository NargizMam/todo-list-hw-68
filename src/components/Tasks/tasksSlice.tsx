import {createSlice} from "@reduxjs/toolkit";
import {ApiTask} from "../../types";
import {addTask, fetchTasks, fulfillmentTask} from "./tasksThunk";
import {RootState} from "../../app/store";

interface TasksState {
    items: ApiTask[],
    fetchLoading: boolean,
    addLoading: boolean,
    fulfillmentLoading: boolean,

}

const initialState: TasksState ={
    items: [],
    fetchLoading: false,
    addLoading: false,
    fulfillmentLoading: false
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder ) => {
        builder.addCase(fetchTasks.pending, (state) => {
            state.fetchLoading = true
        });
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.fetchLoading = false;
            state.items = action.payload;
        });
        builder.addCase(fetchTasks.rejected, (state) => {
            state.fetchLoading = false;
        });
        builder.addCase(addTask.pending, (state) => {
            state.addLoading = true
        });
        builder.addCase(addTask.fulfilled, (state, action) => {
            state.addLoading = false;
        });
        builder.addCase(addTask.rejected, (state) => {
            state.addLoading = false;
        });
        builder.addCase(fulfillmentTask.pending, (state) => {
            state.fulfillmentLoading = true
        });
        builder.addCase(fulfillmentTask.fulfilled, (state) => {
            state.fulfillmentLoading = false;
        });
        builder.addCase(fulfillmentTask.rejected, (state) => {
            state.fulfillmentLoading = false;
        });

    }
});
export const tasksReducer = tasksSlice.reducer;
export const selectLoading = (state: RootState) => state.tasks.fetchLoading;
export const selectAddLoading = (state: RootState) => state.tasks.addLoading;
export const selectFulfillmentLoading = (state: RootState) => state.tasks.fulfillmentLoading;
