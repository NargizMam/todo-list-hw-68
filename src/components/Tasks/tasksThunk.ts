import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {ApiTask, ApiTasksList, Task} from "../../types";
import {RootState} from "../../app/store";

export const fetchTasks = createAsyncThunk(
    'tasks/fetch',
    async () => {
        const tasksResponse = await axiosApi.get<ApiTasksList | null>('tasks.json');
        const tasks = tasksResponse.data;
        let newTasks: ApiTask[] = [];
        if(tasks){
            newTasks = Object.keys(tasks).map(id => {
                const task = tasks[id];
                return {
                    ...task,
                    id
                }
            });
        }
        return newTasks;
    }
);
export const addTask = createAsyncThunk<void, Task, {state: RootState}>(
    'tasks/add',
    async (task) => {
        await axiosApi.post('tasks.json', task);
    }
);
export const fulfillmentTask = createAsyncThunk<void, {id: string, status: boolean}, {state: RootState}>(
    'task/fulfillment',
    async ({id, status}, thunkAPI ) => {

        let newFulfillmentTask = thunkAPI.getState().tasks.items;
        const index = newFulfillmentTask.findIndex((task => task.id === id));

        let newTask = {
                ...newFulfillmentTask[index],
                status: !status
            };
       await axiosApi.put('tasks/' + id + '.json', newTask);
    }
);