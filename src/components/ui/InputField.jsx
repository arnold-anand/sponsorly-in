'use client';

import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200';
  
  const inputClasses = `${baseClasses} ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} ${className}`;
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={inputClasses}
      {...props}
    />
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default InputField;