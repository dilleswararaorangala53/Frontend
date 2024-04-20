import React from 'react';
import nsscord from '../assets/nsscord.jpg';
import '../pages/ContactUs.css'; 
import Mobilefooter from '../components/Mobilefooter';

function ContactUs() {
  return (
    <section>
      {/* <h2 style={{ textAlign: 'center' }}>Contact Us</h2> */}
      <h3 style={{ textAlign: 'center' }}><b>NSS Coordinator</b></h3>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
        <img src={nsscord} alt="NSS Coordinator" height="200px" />
        <div style={{ textAlign: 'center' }}>
          <b><span style={{ fontSize: '1.25rem' }}>V.Mani Kumar</span></b><br />
          Assistant Professor<br />
          Mechanical Engineering,<br />
          Jawaharlal Nehru Technological University Gurajada,<br />
          Vizianagaram - 535 003, Andhra Pradesh, India<br />
          Email ID: <br />
          Phone: 9848667016<br />
        </div>
      </div>
      <div className="container"> {/* Use a div instead of section for the About section */}
        <header className="section-header row about-container">
          <div className="col-lg-0">
            <h3><b>About the Programme Coordinator:</b></h3>
            <p>
            V.Mani Kumar is currently working as Assistant Professor in the Department of Mechanical Engineering at Jawaharlal Nehru Technological University Gurajada, Vizianagaram , Andhra Pradesh. He is having a total of 10 years of experience in teaching .
            </p>
            <p>V.Mani Kumar is presently discharging additional duties as NSS Programme Officer , JNTUGV Vizianagaram , from  January 2020  to  till date</p>
            {/* <p>Received Appreciation Certificate and felicitation from Prof. G. Tulasi Ram Das, Hon’ble Vice Chancellor, JNTUK Kakinada for my committed work for the completion of the Modern Indoor Stadium within the stipulated time and making it ready for the Inauguration on 02-01-2013</p> */}
          </div>
        </header>
      </div>
      <Mobilefooter/>
    </section>
  );
}

export default ContactUs;
