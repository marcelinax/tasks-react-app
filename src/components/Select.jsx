import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import React, { useEffect, useRef, useState } from 'react';

export const Select = ({children,value}) => {

    const [showSelectOptions, setShowSelectOptions] = useState(false);

    const selectRef = useRef();

    useEffect(() => {
        const changeVisibility = (e) => {
            if (showSelectOptions && selectRef.current && !selectRef.current.contains(e.target)) setShowSelectOptions(false);
        };
        
        document.addEventListener('mousedown', changeVisibility);
        return () => {
            document.removeEventListener('mousedown', changeVisibility);
        };
    },[showSelectOptions]);

    return (
        <div className='py-3 px-4 text-white rounded-xl shadow-xl  bg-transparent border-2 border-secondary relative min-w-[150px]' ref={selectRef}>
            <div className='w-full flex justify-between items-center' onClick={()=> {return setShowSelectOptions(true);}}>
                <div className='text-sm select-none'>{value}</div>
                {showSelectOptions? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>}
                
            </div>
            {showSelectOptions && (
                <div className='absolute flex flex-col top-full left-0 z-10 shadow-2xl rounded-lg bg-primary min-h-2 max-h-24 w-full overflow-auto scrollbar'>
                    {children}
                </div>
            )}
        </div>
    );
};
