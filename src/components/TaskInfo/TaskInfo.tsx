import React from 'react';
import {fetchTasks, fulfillmentTask} from "../Tasks/tasksThunk";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectFulfillmentLoading} from "../Tasks/tasksSlice";
import ButtonSpinner from "../Spinner/ButtonSpinner/ButtonSpinner";

interface Props {
    id: string,
    title: string,
    status: boolean
}

const TaskInfo: React.FC<Props> = ({id, status,title}) => {
    const dispatch = useAppDispatch();
    const fulfillment = useAppSelector(selectFulfillmentLoading);

    const handleCheckboxClick =async () => {
       await dispatch(fulfillmentTask({ id, status}));
       await dispatch(fetchTasks());
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
                        {fulfillment ? <ButtonSpinner/> : null}
                    </span>
                    <h5 className="card-title">{title}</h5>
                </div>

        </div>
    );
};

export default TaskInfo;