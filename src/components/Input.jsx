import PropTypes from 'prop-types';
import React from 'react';

export const Input = ({ title, type, className, value, onChange, id }) => {

    return (
        <div className={`flex flex-col w-full relative ${className}`}>
            <label className='text-xs text-pink mb-2 font-medium absolute -top-2 left-4 bg-secondary z-10'>{title}</label>
            <input type={type} className={'outline-none w-full rounded-lg py-3 px-4 bg-transparent border-2 border-gray text-white font-medium text-sm '} value={value} onChange={onChange} id={id} />
        </div>
    );
};

Input.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string
};