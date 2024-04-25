import React, { useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 6000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast">
      <p>{message}</p>
    </div>
  );
};

export default Toast;
