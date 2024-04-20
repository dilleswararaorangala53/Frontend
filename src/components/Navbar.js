import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaInfo, FaUsers, FaImages, FaDownload, FaSignInAlt, FaPhoneAlt, FaAngleDown } from 'react-icons/fa'; // Import icons from Font Awesome
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  const handleChange = (option) => {
    navigate(`/${option.toLowerCase().replace(/\s+/g, '')}`);
    setShowOptions(false);
  };

  return (
    <nav>
      <ul className="nav-list">
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/about"><FaInfo /> About Us</Link></li>
        <li>
          <div className="dropdown">
            <button className="dropbtn" onClick={() => setShowOptions(!showOptions)}><FaUsers /> NSS Unit <FaAngleDown /></button>
            {showOptions && (
              <div className="dropdown-content">
                <Link to="/unit1" onClick={() => handleChange('Unit 1')}>Unit 1</Link>
                <Link to="/unit2" onClick={() => handleChange('Unit 2')}>Unit 2</Link>
                {/* Add more options as needed */}
              </div>
            )}
          </div>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn" onClick={() => setShowOptions(!showOptions)}><FaImages /> Activities <FaAngleDown /></button>
            {showOptions && (
              <div className="dropdown-content">
                <Link to="/suggestiveListOfActivities" onClick={() => handleChange('Suggestive List Of Activities')}>Suggestive List Of Activities</Link>
                <Link to="/SpecialCampingPrograms" onClick={() => handleChange('SpecialCampingPrograms')}>Special Camping Programs</Link>
                <Link to="/RegularActivities" onClick={() => handleChange('Regular Activities')}>Regular Activities</Link>
                <Link to="/ImportantDays" onClick={() => handleChange('Important Days')}>Important Days</Link>
                {/* Add more options as needed */}
              </div>
            )}
          </div>
        </li>
        <li><Link to="/team"><FaUsers /> Team</Link></li>
        <li><Link to="/gallery"><FaImages /> Gallery</Link></li>
        <li><Link to="/downloads"><FaDownload /> Downloads</Link></li>
        <li><Link to="/login"><FaSignInAlt /> Login</Link></li>
        <li><Link to="/contact"><FaPhoneAlt /> Contact Us</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
