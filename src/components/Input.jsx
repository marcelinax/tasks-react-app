import PropTypes from 'prop-types';
import React from 'react';

export const Input = ({ title, type, className, value, onChange, id, error }) => {

    return (
        <div className={`w-full flex flex-col lg:w-1/2 xl:w-full relative ${className}`}>
            <label className='text-xs text-pink mb-2 font-medium absolute -top-2 left-4  bg-secondary z-10'>{error ? error : title}</label> 
            <input type={type} className={`outline-none w-full rounded-lg py-3 px-4 bg-transparent border-2 ${error? 'border-pink':'border-gray'} fill-white text-white font-medium text-xs xl:text-sm `} value={value} onChange={onChange} id={id} />
           
        </div>
    );
};

Input.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string
};