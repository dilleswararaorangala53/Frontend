import React from 'react';
import './NotificationBar.css';

function NotificationBar({ message, show }) {
  return (
    show && (
      <div className="notification-bar">
        <div className="flash-highlight">Flash</div>
        <div className="notification-text">{message}</div>
      </div>
    )
  );
}

export default NotificationBar;
