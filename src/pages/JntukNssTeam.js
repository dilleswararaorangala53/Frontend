import React from 'react';
// import './notifi3.css'
import './JntukNssTeam.css'
const JntukNssTeam = () => {
  const teamMembers = [
    {
      name: 'Dr. A. Bhaskar Reddy',
      role: 'Programme Officer',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Sri N. Siva Sankar',
      role: 'NSS Programme Officer',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Sri P. R. S. Sai Sumanth',
      role: 'NSS Programme Officer',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="jntuk-nss-team">
      <h2>JNTUK NSS Team</h2>
      <ul>
        {teamMembers.map(({ name, role, image }, index) => (
          <li key={index}>
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JntukNssTeam;