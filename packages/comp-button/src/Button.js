import React from 'react'
import './styles/button.scss';

const Button = ({ type = 'button', children, onClick }) => (
  <button type={type} className="button2" onClick={onClick}>
    {children}
  </button>
);

export default Button