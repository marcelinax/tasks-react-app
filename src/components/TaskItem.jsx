import { FaPen, FaTimes } from 'react-icons/fa';
import React, { useContext } from 'react';

import EditFormContext from '../context/editForm/EditFormContext';
import PropTypes from 'prop-types';
import { ToggleButton } from './ToggleButton';
import moment from 'moment';
import { useAxios } from './../hooks/useAxios';
import { useRefreshTasks } from '../hooks/useRefreshTasks';

export const TaskItem = ({id, title, content, photoUrl, end }) => {

    const { refreshTasks } = useRefreshTasks();
    const { setEditedId } = useContext(EditFormContext);

    const { fetchData: deleteTaskById } = useAxios({ 
        method: 'delete',
        url: `/${id}`,
        
    });

    

    const deleteTask = async () => {
        await deleteTaskById();
        await refreshTasks();
    };

    const editTask = () => {
        setEditedId(id);
    };


    return (
        <div className='w-full bg-primary rounded-lg overflow-hidden shadow-md mb-5'>
            <div className='w-full bg-secondary p-6 flex justify-between'>
                <div className='flex items-center h-full'>
                    {photoUrl && <div style={{ backgroundImage: `url(${photoUrl})` }} className='h-14 w-14 bg-center bg-cover bg-no-repeat rounded-lg mr-5' />}
                    <h1 className={`text-white font-medium ${!photoUrl && 'ml-2'}`}>{title}</h1>
                </div>
                <div className='flex items-center'>
                    <FaPen className='cursor-pointer mr-3 hover:scale-125 transition-all' fill='#6FC5BE' onClick={editTask}/>
                    <FaTimes className='cursor-pointer hover:scale-125 transition-all' fill='#FA78A2' onClick={deleteTask}/>
                </div>
            </div>
            <div className='w-full p-6'>
                <div className='w-full flex items-start'>
                    <ToggleButton/>
                    <div className='ml-3 flex flex-col'>
                        <p className='text-white text-sm '>{content}</p>
                        <p className='text-green text-xs mt-1'>{moment(end).calendar({
                            lastDay : '[Yesterday at]  HH:mm',
                            sameDay : '[Today at] HH:mm',
                            nextDay : '[Tomorrow] HH:mm',
                            lastWeek : '[last] dddd [at] HH:mm',
                            nextWeek : 'dddd [at] HH:mm',
                            sameElse : 'dddd, DD.MM.YYYY [at] HH:mm'
                        })}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};


TaskItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    photoUrl: PropTypes.string,
    id: PropTypes.string
};