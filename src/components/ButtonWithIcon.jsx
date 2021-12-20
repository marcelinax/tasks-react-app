import PropTypes from 'prop-types';
import React from 'react';

export const ButtonWithIcon = ({ title, type, className, onClick, icon }) => {
    return (
        <button type={type} onClick={onClick} className={`py-3 px-4 text-white text-xs rounded-xl shadow-xl group shadow-secondary/40 font-medium hover:scale-105 transition-all ${className}`}>
            {title}
            {icon}
        </button>
    );
};

ButtonWithIcon.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
};