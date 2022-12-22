import {configureStore} from "@reduxjs/toolkit";
import {tasksReducer} from "../components/Tasks/tasksSlice";
import {taskInfoReducer} from "../components/TaskInfo/TaskInfoSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        taskInfo: taskInfoReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;