import React from 'react';
import { TaskItem } from '../components/TaskItem';

export const HomeView = () => {
	return (
		<div className='bg-bg-page w-screen h-screen' >
			<div className='container flex flex-col m-auto p-4' >
				<TaskItem />
			</div>
		</div>
	);
};
