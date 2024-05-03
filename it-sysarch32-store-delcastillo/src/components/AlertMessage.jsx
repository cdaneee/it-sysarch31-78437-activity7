/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// AlertMessage.js

import React from 'react';
import './AlertMessage.css';

const AlertMessage = ({ message }) => {
  return (
    <div className="alert-container">
      <p className="alert-message">{message}</p>
    </div>
  );
};

export default AlertMessage;
