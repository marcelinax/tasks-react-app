import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import React, { useContext, useEffect, useRef, useState } from 'react';

import TaskFilterContext from '../context/taskFilter/TaskFilterContext';

export const Select = ({children,value}) => {

    const [showSelectOptions, setShowSelectOptions] = useState(false);

    const selectRef = useRef();

    const { taskFilter,setTaskFilter } = useContext(TaskFilterContext);

    useEffect(() => {
        const changeVisibility = (e) => {
            if (showSelectOptions && selectRef.current && !selectRef.current.contains(e.target)) setShowSelectOptions(false);
        };
        
        document.addEventListener('mousedown', changeVisibility);
        return () => {
            document.removeEventListener('mousedown', changeVisibility);
        };
    }, [showSelectOptions]);
    
    useEffect(() => {
        switch (value) {
        case 'All':
            setTaskFilter({
                ...taskFilter,
                finished: null,
                sortBy: '',
                sortHow: ''
            });
            break;
        case 'Completed':
            setTaskFilter({
                ...taskFilter,
                finished: true
            });
            break;
        case 'Incompleted':
            setTaskFilter({
                ...taskFilter,
                finished: false
            });
            break;
        case 'The latest':
            setTaskFilter({
                ...taskFilter,
                sortBy: 'createdAt',
                sortHow: 'the latest'
            });
            break;
        case 'The oldest':
            setTaskFilter({
                ...taskFilter,
                sortBy: 'createdAt',
                sortHow: 'the oldest'
            });
            break;
            
        }
    }, [value]);

    return (
        <div className='py-3 px-4 text-white rounded-xl shadow-xl  bg-transparent border-2 border-secondary relative min-w-[150px]' ref={selectRef}>
            <div className='w-full flex justify-between items-center' onClick={()=> {return setShowSelectOptions(true);}}>
                <div className='text-sm select-none'>{value}</div>
                {showSelectOptions? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>}
                
            </div>
            {showSelectOptions && (
                <div className='absolute flex flex-col top-full left-0 z-10 shadow-2xl rounded-lg bg-primary min-h-2 max-h-24 w-full overflow-auto scrollbar' onClick={()=> {return setShowSelectOptions(false);}}>
                    {children}
                </div>
            )}
        </div>
    );
};
