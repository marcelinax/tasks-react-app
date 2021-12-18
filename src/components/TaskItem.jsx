import { FaPen, FaTimes } from 'react-icons/fa';

import PropTypes from 'prop-types';
import React from 'react';
import { ToggleButton } from './ToggleButton';

export const TaskItem = ({title, content, photoUrl, end}) => {
    return (
        <div className='w-full bg-primary rounded-lg overflow-hidden shadow-md mb-5'>
            <div className='w-full bg-secondary p-6 flex justify-between'>
                <div className='flex items-center h-full'>
                    <div style={{ backgroundImage: `url(${photoUrl})` }} className='h-14 w-14 bg-center bg-cover bg-no-repeat rounded-lg mr-5' />
                    <h1 className='text-white font-medium'>{title}</h1>
                </div>
                <div className='flex items-center'>
                    <FaPen className='cursor-pointer mr-3 hover:scale-125 transition-all' fill='#6FC5BE' />
                    <FaTimes className='cursor-pointer hover:scale-125 transition-all' fill='#FA78A2' />
                </div>
            </div>
            <div className='w-full p-6'>
                <div className='w-full flex items-start'>
                    <ToggleButton/>
                    <div className='ml-3 flex flex-col'>
                        <p className='text-white text-sm '>{content}</p>
                        <p className='text-green text-xs mt-1'>Today 12:00</p>
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
};