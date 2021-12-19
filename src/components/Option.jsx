import React from 'react';

export const Option = ({title, onClick, isSelected}) => {
    return (
        <div onClick={onClick} className={`w-full flex cursor-pointer hover:bg-secondary ${isSelected && 'bg-secondary'}`}>
            <div className='w-full py-1 px-3'>
                <p className='text-xs'>{title}</p>
            </div>
        </div>
    );
};
