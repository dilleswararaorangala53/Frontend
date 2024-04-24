import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';
// import './notifi.css';
import './NewsEvents.css'
const NewsEvents = () => {
  const [newsEvents, setNewevents] = useState([]);
  const getInfo = async() => {
    const response = await axios.get("http://localhost:8888/api/latestnews/every-events");
    if(response.status === 200){
      setNewevents(response.data);

    }
  } 
  useEffect(() => {
    getInfo();
  }, [])

  // const newsEvents = [
  //   {
  //     date: '2022-01-21',
  //     title: 'JNIUR - NSS tell - Call 101 nominations for State level best NSS Awards - 2021-22',
  //   },
  //   {
  //     date: '2019-11-16',
  //     title: 'Inviting Tenders for 24Hp Compact Tractor',
  //   },
  //   {
  //     date: '2019-11-16',
  //     title: 'Inviting Tenders for Tractor accessories',
  //   },
  //   {
  //     date: '2019-10-29',
  //     title: 'University level NSS Awards for the year 2018-19',
  //   },
  //   {
  //     date: '2019-08-09',
  //     title: 'Call for New NSS Units',
  //   },
  //   {
  //     date: '2019-07-20',
  //     title: 'Swachhata rankings for Notifications',
  //   },
  //   {
  //     date: '2024-01-20',
  //     title: 'J. - N. - T. - University Kakinada - NSS - Cell - Deputation - of NCC - Volunteers.pdf',
  //   },
  //   {
  //     date: '2024-01-03',
  //     title: 'JNTUK - Kakinada - NSS Cell - Circular',
  //   },
  //   {
  //     date: '2023-11-24',
  //     title: 'JNTUK - NSS Cell - Call for nominations for University level best NSS Programme Officer (2 Male + 2 Fe)',
  //   },
  //   {
  //     date: '2023-09-11',
  //     title: 'JNTUK- NSS -Inviting applications for sanctioning of New Colf Funded NCS II',
  //   },
  // ];

  return (
    <div className="news-events">
      <h2>Latest News / Events</h2>
      <ul>
        {newsEvents.map(({ date, title,file_link, file_path  }) => (
          <li key={date}>
            <span>{date}</span>
            <a href={file_link} download={file_path} target='_blank'><span>{title}</span></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsEvents;