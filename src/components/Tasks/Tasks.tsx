import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchTasks} from "./tasksThunk";
import TaskInfo from "../TaskInfo/TaskInfo";

const Tasks = () => {
    const dispatch = useAppDispatch()
    const tasks = useAppSelector(state => state.tasks.items);
    // const loadingState = useAppSelector(state => state.tasks.fetchLoading);

    useEffect(() => {
        dispatch(fetchTasks());
        tasks.map(task => {
            console.log(task, '11111111')
        });
    }, [dispatch]);


    return (
        <>
           <h4>All tasks</h4>
            {tasks.map(task => (
                <TaskInfo task={task}
                          key={Math.random()}
                />
            ))}
        </>
    );
};

export default Tasks;