import { FaPen, FaTimes } from 'react-icons/fa';

import React from 'react';

export const TaskItem = () => {
	return (
		<div className='w-full bg-primary rounded-lg overflow-hidden shadow-md mb-5'>
			<div className='w-full bg-secondary p-6 flex justify-between'>
				<h1 className='text-white font-medium'>TWpka fmkasdmfksdmfkd;smfksd;fm</h1>
				<div className='flex items-center'>
					<FaPen className='cursor-pointer mr-3 hover:scale-125 transition-all' fill='#6FC5BE' />
					<FaTimes className='cursor-pointer hover:scale-125 transition-all' fill='#FA78A2' />
				</div>
			</div>
			<div className='w-full p-6'>
				<div className='w-full flex items-start'>
					<input type='checkbox' />
					<div className='ml-3 flex flex-col'>
						<p className='text-white text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facere impedit in vero suscipit quod ad natus, reprehenderit, nam quisquam incidunt libero distinctio corrupti eius nisi perspiciatis dolores praesentium quasi.</p>
						<p className='text-green text-xs mt-1'>Today 12:00</p>
					</div>

				</div>
			</div>
		</div>
	);
};
