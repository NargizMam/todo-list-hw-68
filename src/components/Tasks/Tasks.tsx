import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchTasks} from "./tasksThunk";
import TaskInfo from "./TaskInfo/TaskInfo";

const Tasks = () => {
    const dispatch = useAppDispatch()
    const tasks = useAppSelector(state => state.tasks.items);
    const loadingState = useAppSelector(state => state.tasks.fetchLoading);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <>
           <h4>All tasks</h4>
            {loadingState ? "pending" : tasks.map(task => {
                <TaskInfo task={task}/>
            })}
        </>
    );
};

export default Tasks;