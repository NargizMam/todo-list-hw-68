import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {ApiTasksList, Task} from "../../types";

export const fetchTasks = createAsyncThunk(
    'tasks/fetch',
    async () => {
        const tasksResponse = await axiosApi.get<ApiTasksList | null>('tasks.json');
        const tasks = tasksResponse.data;
        let newTasks: Task[] = [];
        if(tasks){
            newTasks = Object.keys(tasks).map(id => {
                const task = tasks[id];
                return {
                    ...task,
                    id
                }
            });
        }
        return newTasks

    }
);