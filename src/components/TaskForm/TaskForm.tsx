import React, {useState} from 'react';
import {Task} from "../../types";
import {useDispatch} from "react-redux";
import {addTask} from "../Tasks/tasksThunk";
import {useAppDispatch} from "../../app/hooks";

const TaskForm = () => {
    const [value, setValue] = useState('');
    const dispatch = useAppDispatch();

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const task: Task = {
            title: value,
            status: false
        }
        dispatch(addTask(task));
    };

    return (
        <form onSubmit={onSubmit} className='form-inline mt-3 mb-3 d-flex'>
            <input
                type='text'
                className='form-control mb-2 mr-sm-2'
                placeholder='Add a todo'
                value={value}
                onChange={(event) => setValue(event.target.value)}/>
            <button type='submit' className='btn btn-secondary mb-3'>
                Add
            </button>
        </form>
    );
};

export default TaskForm;