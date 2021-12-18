import { Input } from './Input';
import { PrimaryButton } from './PrimaryButton';
import React from 'react';

export const TaskForm = () => {

    const onSubmit = (e) => {
        e.preventDefault(); 
    };

    return (
        <div className='bg-secondary w-full py-6 px-12 mb-20 rounded-lg shadow-md'>
            <form onSubmit={onSubmit}>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex flex-1 items-center '>
                        <Input type='text' title='Title' className='mr-3' />
                        <Input type='text' title='Content' className='mr-3' />
                        <Input type='datetime-local' title='End' className='mr-3' />
                        <Input type='text' title='Photo url' />
                    </div>
                    <PrimaryButton type='submit' title='Create' className={'bg-green ml-20'} />
                </div>
            </form>
        </div>
    );
};
