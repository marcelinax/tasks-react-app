import React, { useContext, useEffect, useState } from 'react';

import { FaSearch } from 'react-icons/fa';
import TaskFilterContext from '../context/taskFilter/TaskFilterContext';

export const Search = () => {
    
    const [value, setValue] = useState('');
    const { taskFilter, setTaskFilter } = useContext(TaskFilterContext);
    
    useEffect(() => {
       
        setTaskFilter({
            ...taskFilter,
            query: value
        });

    },[value]);

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    return (
     
        <div className='w-1/2 rounded-lg shadow-md flex justify-between items-center overflow-hidden px-4 bg-primary'>
            <input type='text' placeholder='Search...' value={value} onChange={handleInput} className='w-full h-full py-4 mr-4 outline-none bg-transparent text-white text-sm placeholder:text-white placeholder:text-sm' />
            <FaSearch fill='#ffffff'/>
        </div>
      
    );
};
