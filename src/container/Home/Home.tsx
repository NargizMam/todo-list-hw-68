import React from 'react';
import TaskForm from "../../components/TaskForm/TaskForm";
import Tasks from "../../components/Tasks/Tasks";

const Home = () => {
    return (
        <div className="container text-center">
            <TaskForm/>
            <Tasks/>
        </div>
    );
};

export default Home;