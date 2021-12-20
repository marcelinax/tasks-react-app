import React, { useContext, useEffect, useState } from 'react';

import EditFormContext from '../context/editForm/EditFormContext';
import { Input } from './Input';
import { PrimaryButton } from './PrimaryButton';
import TasksContext from '../context/tasks/TasksContext';
import { useAxios } from './../hooks/useAxios';
import { useRefreshTasks } from '../hooks/useRefreshTasks';

export const TaskForm = () => {


    const { editedId, setEditedId } = useContext(EditFormContext);
    const { tasks } = useContext(TasksContext);

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        end: '',
        photoUrl: ''
    });

    const { errors, fetchData } = useAxios({
        method: 'post',
        url: '/',
        data: {
            title: formData.title,
            content: formData.content,
            end: formData.end,
            photoUrl: formData.photoUrl,
            
        }
    });
    const { errors: updateTaskErrors, fetchData: updateTaskById } = useAxios({
        method: 'put',
        url: `/${editedId}`,
        data: {
            title: formData.title,
            content: formData.content,
            end: formData.end,
            photoUrl: formData.photoUrl,
            
        }
    });

    const { refreshTasks } = useRefreshTasks();
    
    useEffect(() => {
        if (editedId !== '') {
            const taskToEdit = tasks.filter(task => { return task._id === editedId; })[0];
            setFormData({
                title: taskToEdit.title,
                content: taskToEdit.content,
                end: new Date(taskToEdit.end).toISOString().slice(0, (taskToEdit.end.length - 8)),
                photoUrl: taskToEdit.photoUrl ?? ''
            });
        }
        
    }, [editedId]);
    
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
    };

    const editTask = async (e) => {
        e.preventDefault(); 
        await updateTaskById();
        await refreshTasks();
        await setEditedId('');
        clearForm();
    };



    const clearForm = () => {
        setFormData({
            title: '',
            content: '',
            end: '',
            photoUrl: ''
        });
    };


    const filterErrors = (param) => {
        if (updateTaskErrors && updateTaskErrors.length > 0) {
            return errors[0].filter(err => {return err.param === param;})[0].msg;
        }
        if (errors && errors.length > 0) {
            return errors[0].filter(err => {return err.param === param;})[0].msg;
        }
        
    };

    return (
        <div className='bg-secondary w-full py-6 md:px-12 lg:px-2 xl:px-12  mb-20 rounded-lg xl:shadow-md'>
            <form onSubmit={onSubmit}>
                {console.log(updateTaskErrors)}
                <div className='w-full p-3 flex flex-col xl:flex-row items-center xl:justify-between'>
                    <div className='w-full flex flex-1 flex-col lg:flex-row xl:flex-row items-center lg:mb-6 xl:mb-0 '>
                        <Input type='text' title='Title' className='mb-3 lg:mb-0 lg:mr-3' id='title' value={formData.title} onChange={onChange} error={filterErrors('title')} />
                        <Input type='text' title='Content' className='mb-3 lg:mb-0 lg:mr-3' id='content' value={formData.content} onChange={onChange} error={filterErrors('content')}/>
                        <Input type='datetime-local' title='End' className='mb-3 lg:mb-0 lg:mr-3' id='end' value={formData.end} onChange={onChange} error={filterErrors('end')}/>
                        <Input type='text' className='mb-6 lg:mb-0' title='Photo url' id='photoUrl' value={formData.photoUrl} onChange={onChange} error={filterErrors('photoUrl')} />
                    </div>
                    {editedId === '' ? <PrimaryButton type='submit' title='Create' className={'bg-green xl:ml-20'} onClick={onSubmit}/> : <PrimaryButton type='submit' title='Update' className={'bg-green xl:ml-20'} onClick={editTask}/>}
                </div>
            </form>
        </div>
    );
};
