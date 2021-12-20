import React, { useState } from 'react';

import { ButtonWithIcon } from '../components/ButtonWithIcon';
import {EditFormProvider} from './../context/editForm/EditFormContext';
import { FaTrash } from 'react-icons/fa';
import { Option } from '../components/Option';
import { Search } from '../components/Search';
import { Select } from '../components/Select';
import { Spinner } from '../components/Spinner';
import { TaskForm } from '../components/TaskForm';
import { TasksResult } from '../components/TasksResult';
import { useAxios } from '../hooks/useAxios';
import { useRefreshTasks } from '../hooks/useRefreshTasks';

export const HomeView = () => {

    const { refreshTasks, loading } = useRefreshTasks();
    const [selectValue, setSelectValue] = useState('All');

    const { fetchData: deleteAllFinishedTasks } = useAxios({
        method: 'post',
        url: '/deleteFinishedTasks'
    });

    const deleteAllCompletedTasks = async () => {
        await deleteAllFinishedTasks();
        await refreshTasks();
    };
    
    return (
        
        <EditFormProvider>
            <div className='bg-bg-page w-full min-h-screen' >
                <div className='w-full md:container flex flex-col m-auto p-4' >
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
                        <ButtonWithIcon title='' type='button' icon={<FaTrash className='group-hover:fill-pink' />} onClick={deleteAllCompletedTasks} className='bg-transparent border-2 border-secondary ml-4 '/>
                    </div>
                    {loading ? <Spinner/> : <TasksResult/>}
               
                </div>
            </div>
        </EditFormProvider>
    );
};
