import React from 'react';
import './Srikakulam.css'; // Import CSS file for styling
import person from '../../assets/person.jpg';
const Srikakulam = () => {
  return (
    <div className="srikakulam-page">
      <div className="box">
        <div className="image-box">
          {/* Image displayed here */}
          <img src={person} alt="Image 1" />
        </div>
        <div className="content">
          {/* Content displayed here */}
          <h3>Dr. B.Balaram</h3>
          <h4>9440550343<br/>     
       balaram_bora@rediffmail.com</h4>
          <p>Aditya Institute of Technology & Management, Tekkali, Srikakulam District-532201</p>
        </div>
      </div>
      <div className="box">
        <div className="image-box">
          {/* Image displayed here */}
          <img src={person} alt="Image 2" />
        </div>
        <div className="content">
          {/* Content displayed here */}
          <h3>Dr. B.PrasadaRao</h3>
          <h4>9912940557<br/>        
prasadaraobondada@gmail.com</h4>
          <p>Sri Sivani College of Engineering,Chilakapalem Junction,Srikakulam Distrrict-532 402</p>
        </div>
      </div>
      <div className="box">
        <div className="image-box">
          {/* Image displayed here */}
          <img src={person} alt="Image 3" />
        </div>
        <div className="content">
          {/* Content displayed here */}
          <h3>Dr. K.V.S.Prasad</h3>
          <h4>9866832277<br/>
          prasad.kvs@gmrit.edu.in</h4>
          <p>GMR Institute of Technology,GMR Nagar, Rajam, Srikakulam Distrrict-532127</p>
        </div>
      </div>
      <div className="box">
        <div className="image-box">
          {/* Image displayed here */}
          <img src={person} alt="Image 4" />
        </div>
        <div className="content">
          {/* Content displayed here */}
          <h3>Sri. K.Rakesh</h3>
          <h4>7989386890<br/>
          rakeshkallepalli1991@gmail.com</h4>
          <p>Sri Venkateswara College of Engineering & Technology,EtcherlaMandam, Srikakulam Distrrict-532 402</p>
        </div>
      </div>
    </div>
  );
}

export default Srikakulam;
