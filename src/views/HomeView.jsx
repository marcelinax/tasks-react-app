import React from 'react';
import { TaskForm } from '../components/TaskForm';
import { TaskItem } from '../components/TaskItem';

export const HomeView = () => {
	return (
		<div className='bg-bg-page w-screen h-screen' >
			<div className='container flex flex-col m-auto p-4' >
				<TaskForm />
				<div className='flex w-full flex-col'>
					<TaskItem />
					<TaskItem />
					<TaskItem />
				</div>

			</div>
		</div>
	);
};
