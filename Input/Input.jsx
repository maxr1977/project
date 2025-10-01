import React from 'react';
import styles from './Input.module.css';

const Input = ({ type = 'text', placeholder, value, onChange, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={styles.input}
      required
    />
  );
};

export default Input;