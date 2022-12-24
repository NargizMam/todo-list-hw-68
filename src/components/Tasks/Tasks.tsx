import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchTasks} from "./tasksThunk";
import TaskInfo from "../TaskInfo/TaskInfo";
import {selectLoading} from "./tasksSlice";
import Spinner from "../Spinner/Spinner";

const Tasks = () => {
    const dispatch = useAppDispatch()
    const tasks = useAppSelector(state => state.tasks.items);
    const isLoading = useAppSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchTasks());

    }, [dispatch]);


    return (
        <>
           <h4>All tasks</h4>
            {isLoading && <Spinner/>}
            {tasks.map(task => (
                <TaskInfo
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    status={task.status}
                />
            ))}
        </>
    );
};

export default Tasks;