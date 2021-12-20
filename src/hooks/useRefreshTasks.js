import React, { useContext, useEffect } from 'react';

import TaskFilterContext from './../context/taskFilter/TaskFilterContext';
import TasksContext from '../context/tasks/TasksContext';
import { setTasks } from '../context/tasks/TasksActions';
import { useAxios } from './useAxios';

export const useRefreshTasks = () => {

    const { dispatch } = useContext(TasksContext);

    const {taskFilter} = useContext(TaskFilterContext);


    const {response: tasksResponse, fetchData: refreshTasks, loading}= useAxios({
        method: 'post',
        url: '/search',
        data:taskFilter
    });

    useEffect(() => {
        refreshTasks();
    },[taskFilter]);

    useEffect(() => {
       
        if (tasksResponse)
            dispatch(setTasks(tasksResponse));
    }, [tasksResponse]);

    return {refreshTasks,loading};
};
