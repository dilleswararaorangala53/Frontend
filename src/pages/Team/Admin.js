import React from 'react';
import './Admin.css'; // Import CSS file for Admin component
import nsscord from '../../assets/nsscord.jpg';
import { FaPhoneAlt } from 'react-icons/fa';

const Admin = () => {
  return (
    <div className="admin-container"> {/* Apply a container class */}
      <div className="flip-card"> {/* Apply flip-card class */}
        <div className="flip-card-inner"> {/* Apply flip-card-inner class */}
          <div className="flip-card-front"> {/* Apply flip-card-front class */}
            <img src={nsscord} alt="Admin" />
          </div>
          <div className="flip-card-back"> {/* Apply flip-card-back class */}
            <div className="back-content">
              
              <h3>V.Mani Kumar</h3><br/><br/>
              <FaPhoneAlt /> {/* Phone icon */}
              <span>9848667016</span> {/* Phone number */}
            </div>
          </div>
        </div>
      </div>
      <div className='admindetails'>
        <h2>NSS COORDINATOR</h2><br/><br/>
      <h3>Assistant Professor<br/>
Mechanical Engineering,<br/>
Jawaharlal Nehru Technological University Gurajada,<br/>
Vizianagaram - 535 003, Andhra Pradesh, India</h3>
      </div>
    </div>
  );
}

export default Admin;
