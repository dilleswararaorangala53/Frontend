// src/pages/Activities.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Mobilefooter from '../../components/Mobilefooter';

const Activities = () => {
  const location = useLocation();
  return (
    <div>
      <div>
        <Link
          to="/SuggestiveListOfActivities" 
          className={`menuButton ${
            location.pathname === "/SuggestiveListOfActivities" ? "active" : ""
          }`}
        >
          Unit1
        </Link>
      </div>
      <div>
        <Link
          to="/SpecialCampingPrograms" 
          className={`menuButton ${
            location.pathname === "/SpecialCampingPrograms" ? "active" : ""
          }`}
        >
          Unit2
        </Link>
      </div>
      <Mobilefooter />
    </div>
  );
}

export default Activities;
