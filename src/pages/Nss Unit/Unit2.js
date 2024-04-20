import React, { useState } from 'react';
import Mobilefooter from '../../components/Mobilefooter';
import unit2co from '../../assets/unit2co.jpg';
import TeamMembers2 from './TeamMembers2';
// import './Unit1.css';
import Activities2 from './Activities2';
const Unit2 = () => {
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
                <h3>NSS UNIT-2 COORDINATOR</h3>
                <img src={unit2co} alt="Profile" width="200" height="250" /><br/><br/>
              <div className="profileDesignation">
              <h4 className="regularStyleH4">Dr. B Dharma Rao</h4><br />
                  <h3>Assistant Professor (c), Department of BS&HSS</h3>
                  </div>
                </div>
            </center>
          )}
          {activeButton === 'teammembers' && (
            <div >
              <p><TeamMembers2/></p>
            </div>
          
          )}
          {activeButton === 'activities' && (
            <div>
              
              {/* Activities */}
              <Activities2/>
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

export default Unit2;
