import React, { useContext, useEffect } from 'react';

import { Search } from '../components/Search';
import { TaskForm } from '../components/TaskForm';
import { TaskItem } from '../components/TaskItem';
import TasksContext from '../context/tasks/TasksContext';
import { TasksResult } from '../components/TasksResult';
import { setTasks } from '../context/tasks/TasksActions';
import { useAxios } from '../hooks/useAxios';

export const HomeView = () => {

    const { dispatch } = useContext(TasksContext);

    const {response: tasksResponse}= useAxios({
        method: 'get',
        url: '/'
    });

    useEffect(() => {
        if (tasksResponse)
            dispatch(setTasks(tasksResponse));
    }, [tasksResponse]);

    

    return (
        <div className='bg-bg-page w-full min-h-screen' >
            <div className='container flex flex-col m-auto p-4' >
                <TaskForm />
                <div className='w-full flex items-center justify-center mb-20'>
                    <Search/>
                </div>
                <TasksResult/>
            </div>
        </div>
    );
};
