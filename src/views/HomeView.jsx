import React, { useContext, useEffect, useState } from 'react';

import { Option } from '../components/Option';
import { Search } from '../components/Search';
import { Select } from '../components/Select';
import { TaskForm } from '../components/TaskForm';
import { TaskItem } from '../components/TaskItem';
import TasksContext from '../context/tasks/TasksContext';
import { TasksResult } from '../components/TasksResult';
import { setTasks } from '../context/tasks/TasksActions';
import { useAxios } from '../hooks/useAxios';

export const HomeView = () => {

    const { dispatch } = useContext(TasksContext);
    const [selectValue, setSelectValue] = useState('All');

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
                <div className='w-full flex justify-end mb-7'>
                    <Select value={selectValue}>
                        <Option title='All' key='all' isSelected={selectValue === 'All'} onClick={()=>{return setSelectValue('All');}}/>
                        <Option title='The latest' key='latest' isSelected={selectValue === 'The latest'} onClick={ ()=>{return setSelectValue('The latest');}}/>
                        <Option title='The oldest' key='oldest' isSelected={selectValue === 'The oldest'} onClick={() => { return setSelectValue('The oldest'); }} />
                        <Option title='Completed' key='completed' isSelected={selectValue === 'Completed'} onClick={() => { return setSelectValue('Completed'); }} />
                        <Option title='Incompleted' key='incompleted' isSelected={selectValue === 'Incompleted'} onClick={() => { return setSelectValue('Incompleted'); }} />
                    </Select>
                </div>
                <TasksResult/>
            </div>
        </div>
    );
};
