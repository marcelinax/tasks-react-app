import React, { useContext, useEffect, useState } from 'react';

import TaskContext from '../context/tasks/TasksContext';
import { TaskItem } from './TaskItem';
import { getTasks } from './../context/tasks/TasksActions';

export const TasksResult = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <div className='flex w-full flex-col'>
            {tasks.map(task => {return (
                <TaskItem key={task._id} title={task.title} content={task.content} photoUrl={task.photoUrl} end={task.end}/>
            );})}
        </div>
    );
};
