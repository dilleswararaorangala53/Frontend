import React from 'react';
import Mobilefooter from '../../components/Mobilefooter';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom

const NssUnit = () => {
  const location = useLocation();
  return (
    <div>
      <div>
        <Link
          to="/Unit1" 
          className={`menuButton ${
            location.pathname === "/Unit1" ? "active" : ""
          }`}
        >
          Unit1
        </Link>
      </div>
      <div>
      <Link
          to="/Unit2" 
          className={`menuButton ${
            location.pathname === "/Unit2" ? "active" : ""
          }`}
        >
          Unit2
        </Link>
      </div>
      <Mobilefooter />
    </div>
  );
}

export default NssUnit;
