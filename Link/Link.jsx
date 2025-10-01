import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Link.module.css';

const Link = ({ to, children, variant = 'primary' }) => {
  const linkClass = styles[variant] || styles.primary;

  return (
    <RouterLink to={to} className={`${styles.link} ${linkClass}`}>
      {children}
    </RouterLink>
  );
};

export default Link;