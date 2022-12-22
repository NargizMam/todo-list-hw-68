import React from 'react';
import {Task} from "../../types";

interface Props {
    task: Task;
}

const TaskInfo: React.FC<Props> = ({task}) => {
    return (
        <div className="card col-6 m-2" >
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>

                    </div>
                </div>
        </div>
    );
};

export default TaskInfo;