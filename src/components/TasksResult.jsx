import React, { useContext, useState } from 'react';

import TaskContext from '../context/tasks/TasksContext';
import { TaskItem } from './TaskItem';
import { useAxios } from './../hooks/useAxios';

export const TasksResult = () => {
    const { tasks } = useContext(TaskContext);

   
    return (
        <div className='flex w-full flex-col'>
            {tasks.map(task => {return (
                <TaskItem key={task._id} id={task._id} title={task.title} content={task.content} photoUrl={task.photoUrl} end={task.end} finished={task.finished} />
            );})}
        </div>
    );
};
