import { FaSpinner, FaTimes } from 'react-icons/fa';

import React from 'react';

export const Spinner = () => {
    return (
        <div className='w-screen h-screen z-20  flex items-center justify-center fixed top-0 left-0'>
            <FaSpinner size={50} fill='#ffffff'/>
        </div>
    );
};
