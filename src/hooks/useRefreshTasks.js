import React, { useContext, useEffect } from 'react';

import TasksContext from '../context/tasks/TasksContext';
import { setTasks } from '../context/tasks/TasksActions';
import { useAxios } from './useAxios';

export const useRefreshTasks = () => {

    const { dispatch } = useContext(TasksContext);

    const {response: tasksResponse, fetchData: refreshTasks, loading}= useAxios({
        method: 'get',
        url: '/'
    });

    useEffect(() => {
        if (tasksResponse)
            dispatch(setTasks(tasksResponse));
    }, [tasksResponse]);

    return {refreshTasks,loading};
};
