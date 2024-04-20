import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import './notifi2.css'
import './Notifications.css'
const Notifications = () => {

  const [notifications, setNotifications] = useState([]);
  const getInfo = async() => {
    const response = await axios.get("http://localhost:8888/api/updates/every-events");
    if(response.status === 200){
      setNotifications(response.data);
    }
  } 
  useEffect(() => {
    getInfo();
  }, [])
  const nnotifications = [
    {
      date: '2024-01-20',
      title: 'J. - N. - T. - University Kakinada - NSS - Cell - Deputation - of NCC - Volunteers.pdf',
    },
    {
      date: '2024-01-03',
      title: 'JNTUK - Kakinada - NSS Cell - Circular',
    },
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map(({ date, title, file_link, file_path }) => (
          <li key={date}>
            <span>{date}</span>
            <a href={file_link} download={file_path} target='_blank'><span>{title}</span></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;