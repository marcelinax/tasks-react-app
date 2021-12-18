import PropTypes from 'prop-types';
import React from 'react';

export const PrimaryButton = ({ title, type, className }) => {
    return (
        <button type={type} className={`py-3 px-12 text-white rounded-xl shadow-xl shadow-secondary/40 font-semibold hover:scale-105 transition-all ${className}`}>{title}</button>
    );
};

PrimaryButton.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string
};