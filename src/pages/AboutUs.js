// src/pages/AboutUs.js
import React from 'react';
import './AboutUs.css'; 
import Mobilefooter from '../components/Mobilefooter';
function AboutUs() {
  return (
    <div className='about'>
      
      <section>
        <h2>About Us</h2>
        <p>The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, 
          Ministry of Youth Affairs & Sports initiated in 1969, the birth centenary year of Mahatma Gandhi, 
          provides the platform to the students to build their personality in participating social service related
          programmes of various government led communities. The graduate, Post graduate and  11th & 12th Class schools 
          students can involve in the NSS activities which helps them to develop a democratic attitude and leadership 
          qualities, civic and social responsibilities and also helps the students  to take their roles in the community, 
          gain skills for organizing participation to the community, 
          practice towards national integration and social harmony.</p>
          <p>The symbol for the NSS has been based on the giant Rath Wheel of the world-famous Konark Sun Temple (The Black Pagoda) situated in Odisha, India. The wheel signifies the NSS volunteers serving the human kind continuously for the social change in the society. The eight bars in the wheel represents 24 hours of a day. The red colour indicates that the volunteer with full of young blood who serve with high spirit. The navy blue colour indicates the cosmos of which the NSS is tiny part, ready to contribute its share for the welfare of the mankind. It stands for continuity as well as change and implies the continuous striving of NSS for social transformation and uplift.</p>

           <h3>The motto of National Service Scheme is NOT ME BUT YOU</h3>

          <p>NSS Unit of JNTU Gurajada University is providing services to the society almost from the inception of the institution under the JNTUGV NSS cell. All these years, various activities are conducted in the vizianagaram district by our young, committed and social responsible volunteers. Our NSS unit always strive hard to promote the social change in people of vizianagaram district by identifying the problems in the current society and finds the solutions and promote them in the society by conducting programmes.</p>
        {/* Add more content as needed */}
      </section>
      <Mobilefooter />
    </div>
  );
}

export default AboutUs;
