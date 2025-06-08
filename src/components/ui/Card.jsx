'use client';

import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-sm';
  const cardClasses = `${baseClasses} ${className}`;
  
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;