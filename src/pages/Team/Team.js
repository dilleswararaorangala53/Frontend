import React, { useState } from 'react';
import './Team.css';
import Mobilefooter from '../../components/Mobilefooter';
import Admin from './Admin';
import Srikakulam from './Srikakulam';
const Team = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const renderContent = () => {
    switch (selectedLink) {
      case 'Admin':
        return (
          <div>
            <Admin/>
          </div>
        );
      case 'Visakapatnam':
        return (
          <div>
            {/* Content for Visakapatnam */}
          </div>
        );
      case 'Vizianagaram':
        return (
          <div>
            {/* Content for Vizianagaram */}
          </div>
        );
      case 'Srikakulam':
        return (
          <div>
           <Srikakulam/>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='team-content'>
      <table>
        <tbody>
          <tr>
            <td><a href="#" onClick={() => handleLinkClick('Admin')}>Admin</a></td>
            <td><a href="#" onClick={() => handleLinkClick('Visakapatnam')}>Visakapatnam</a></td>
            <td><a href="#" onClick={() => handleLinkClick('Vizianagaram')}>Vizianagaram</a></td>
            <td><a href="#" onClick={() => handleLinkClick('Srikakulam')}>Srikakulam</a></td>
          </tr>
        </tbody>
      </table>
      {selectedLink && (
        <div className="selected-link-content">
          {renderContent()}
        </div>
      )}
      <Mobilefooter />
    </div>
  );
}

export default Team;
