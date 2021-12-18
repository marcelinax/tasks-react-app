import React, { useContext, useEffect, useState } from 'react';

import { Input } from './Input';
import { PrimaryButton } from './PrimaryButton';
import TasksContext from '../context/tasks/TasksContext';
import { setTasks } from './../context/tasks/TasksActions';
import { useAxios } from './../hooks/useAxios';

export const TaskForm = () => {

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        end: '',
        photoUrl: ''
    });

    const { errors, loading, fetchData } = useAxios({
        method: 'post',
        url: '/',
        data: {
            title: formData.title,
            content: formData.content,
            end: formData.end,
            photoUrl: formData.photoUrl,
            
        }
    });

    const { dispatch } = useContext(TasksContext);

    const {response: tasksResponse, fetchData: refreshTasks}= useAxios({
        method: 'get',
        url: '/'
    });
    
    const onChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault(); 
        await fetchData();
        await refreshTasks();
        clearForm();
        console.log(errors);
    };



    const clearForm = () => {
        setFormData({
            title: '',
            content: '',
            end: '',
            photoUrl: ''
        });
    };

    useEffect(() => {
        if (tasksResponse)
            dispatch(setTasks(tasksResponse));
    },[tasksResponse]);

    return (
        <div className='bg-secondary w-full py-6 px-12 mb-20 rounded-lg shadow-md'>
            <form onSubmit={onSubmit}>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex flex-1 items-center '>
                        <Input type='text' title='Title' className='mr-3' id='title' value={formData.title} onChange={onChange} />
                        <Input type='text' title='Content' className='mr-3' id='content' value={formData.content} onChange={onChange}/>
                        <Input type='datetime-local' title='End' className='mr-3' id='end' value={formData.end} onChange={onChange}/>
                        <Input type='text' title='Photo url' id='photoUrl' value={formData.photoUrl} onChange={onChange}/>
                    </div>
                    <PrimaryButton type='submit' title='Create' className={'bg-green ml-20'} onClick={onSubmit}/>
                </div>
            </form>
        </div>
    );
};
