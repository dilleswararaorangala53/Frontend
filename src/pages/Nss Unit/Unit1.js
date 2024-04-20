import React, { useState } from 'react';
import Mobilefooter from '../../components/Mobilefooter';
import unit1co from '../../assets/unit1co.jpg';
import './Unit1.css';
import TeamMembers1 from './TeamMembers1'
import Activities1 from './Activities1';

const Unit1 = () => {
  // State to manage active button
  const [activeButton, setActiveButton] = useState('profile');

  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
        {/* Buttons */}
        <button
          className={`menuButton ${activeButton === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveButton('profile')}
        >
          Profile
        </button>
        <button
          className={`menuButton ${activeButton === 'teammembers' ? 'active' : ''}`}
          onClick={() => setActiveButton('teammembers')}
        >
          Team Members
          
        </button>
        <button
          className={`menuButton ${activeButton === 'activities' ? 'active' : ''}`}
          onClick={() => setActiveButton('activities')}
        >
          Activities
        </button>
        <button
          className={`menuButton ${activeButton === 'gallery' ? 'active' : ''}`}
          onClick={() => setActiveButton('gallery')}
        >
          Gallery
        </button>
      </div>
      <div className="allRightContent">
        <br />
        <div className="allRightContentProfile">
          {/* Profile information */}
          {activeButton === 'profile' && (
            <center>
              <div className="profileImage">
                <h3>NSS UNIT-1 COORDINATOR</h3><br/>
                <img src={unit1co} alt="Profile" width="200" height="250" />
                <div className="profileDesignation">
                <h3 className="regularStyleH4">Arnuri Srinivasulu</h3>
                <h4>Assistant Professor (c),Department of Metallurgical Engineering</h4>
                </div>
              </div>
            </center>
          )}
          {activeButton === 'teammembers' && (
            <div>
              {/* Team Members */}
             <TeamMembers1/>
            </div>
          )}
          {activeButton === 'activities' && (
            <div>
              {/* Activities */}
              <Activities1/>
            </div>
          )}
          {activeButton === 'gallery' && (
            <div>
              {/* Gallery */}
              <p>Gallery</p>
            </div>
          )}
        </div>
      </div>
      <Mobilefooter />
    </div>
  );
}

export default Unit1;