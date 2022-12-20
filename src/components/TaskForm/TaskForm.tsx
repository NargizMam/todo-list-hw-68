import React from 'react';

const TaskForm = () => {


    return (
        <form className="form col-6">
            <div className="form-group mb-2">
                <label htmlFor="text">New TASK</label>
                <textarea
                    id="text" name="text"
                    className="form-control"
                />
            </div>
            <button type="submit"
                    className="btn btn-primary"
            >CREATE</button>
        </form>
    );
};

export default TaskForm;