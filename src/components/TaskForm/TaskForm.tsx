import React, {useState} from 'react';
import {Task} from "../../types";
import {addTask, fetchTasks} from "../Tasks/tasksThunk";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectAddLoading} from "../Tasks/tasksSlice";
import ButtonSpinner from "../Spinner/ButtonSpinner/ButtonSpinner";

const TaskForm = () => {
    const [ value, setValue ] = useState({content: '', contentError: ''});
    const isLoading = useAppSelector(selectAddLoading);

    const dispatch = useAppDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setValue({...value, [e.target.name]: e.target.value,
            [`${e.target.name}Error`]: null });
    }
    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if(value.content === ''){
            setValue({...value, contentError: 'You must write something!'})
            return;
        }else {
            const task: Task = {
                title: value.content,
                status: false
            }
           await dispatch(addTask(task));
           await dispatch(fetchTasks());
        }

    };

    return (
        <form onSubmit={onSubmit} className='form-inline mt-3 mb-3 d-flex'>
            <div>{value.contentError}</div>
            <input
                type='text'
                className='form-control mb-2 mr-sm-2'
                placeholder='Add a todo'
                value={value.content}
                name='content'
                onChange={(e) => handleChange(e)}/>
            <button type='submit'
                    className='btn btn-secondary mb-3'
                    disabled={isLoading || value.content === ''}
            >
                {isLoading ? <ButtonSpinner/> : 'Add'}
            </button>
        </form>
    );
};

export default TaskForm;