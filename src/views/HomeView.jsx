import React from 'react';
import { Search } from '../components/Search';
import { TaskForm } from '../components/TaskForm';
import { TaskItem } from '../components/TaskItem';

export const HomeView = () => {
    return (
        <div className='bg-bg-page w-full min-h-screen' >
            <div className='container flex flex-col m-auto p-4' >
                <TaskForm />
                <div className='w-full flex items-center justify-center mb-20'>
                    <Search/>
                </div>
                <div className='flex w-full flex-col'>
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                </div>

            </div>
        </div>
    );
};
