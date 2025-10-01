import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, type = 'button', variant = 'primary', disabled = false }) => {
  const buttonClass = styles[variant] || styles.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${buttonClass}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;