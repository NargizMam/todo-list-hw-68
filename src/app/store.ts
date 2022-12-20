import {configureStore} from "@reduxjs/toolkit";
import {taskReducer} from "../components/Tasks/TaskInfo/TaskInfoSlice";
import {tasksReducer} from "../components/Tasks/tasksSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        taskInfo: taskInfoReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;