import React from 'react';
import {ApiTask, Task} from "../../types";
import {useDispatch} from "react-redux";
import {fulfillmentTask} from "../Tasks/tasksThunk";
import {useAppDispatch} from "../../app/hooks";
import {stat} from "fs";

interface Props {
    id: string,
    title: string,
    status: boolean
}

const TaskInfo: React.FC<Props> = ({id, status,title}) => {
    const dispatch = useAppDispatch();

    const handleCheckboxClick = () => {
        dispatch(fulfillmentTask({ id, status}));
    };
    return (
        <div className="card col-6 m-2" >
                <div className="card-body container d-flex justify-content-between">
                    <span className='d-flex align-items-center' >
                          <input className="form-check-input"
                                 type="checkbox"
                                 value="" id="flexCheckChecked"
                                 onChange={handleCheckboxClick}
                                 checked={status}/>

                    </span>
                    <h5 className="card-title">{title}</h5>
                </div>

        </div>
    );
};

export default TaskInfo;