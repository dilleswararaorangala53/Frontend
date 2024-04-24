import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotificationBar from './pages/NotificationBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Activities from './pages/Activities/Activities';
import Team from './pages/Team/Team';
import NssUnit from './pages/Nss Unit/NssUnit';
import Gallery from './pages/Gallery';
import Downloads from './pages/Downloads';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';
import Notifications from './pages/Notifications';
import JntukNssTeam from './pages/JntukNssTeam';
import Unit1 from './pages/Nss Unit/Unit1'; 
import Unit2 from './pages/Nss Unit/Unit2';
import SuggestiveListOfActivities from './pages/Activities/SuggestiveListOfActivities'; 
import SpecialCampingPrograms from './pages/Activities/SpecialCampingProgrammes';
import RegularActivities from './pages/Activities/RegularActivities';
import ImportantDays from './pages/Activities/ImportantDays';
import TeamMembers1 from './pages/Nss Unit/TeamMembers1';
import TeamMembers2 from './pages/Nss Unit/TeamMembers2';
import FormPage from '../src/pages/FormPage'; // Assuming this is where the form is located
import Downloadform from './pages/DownloadButton';
import Updateform from './pages/UpdateButton';
import Latestnewsbutton from './pages/Latestnewsbutton';
import Deleteupdates from './pages/Deleteupdates';
import Deleteevents from './pages/Deleteevents';

function AppRouter() {
  return (
    <Router>
      <Header />
      <NotificationBar message="gbhbnkjlj jkn kj" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/suggestiveListOfActivities" element={<SuggestiveListOfActivities />} /> 
        <Route path="/SpecialCampingPrograms" element={<SpecialCampingPrograms/>}/>
        <Route path="/RegularActivities" element={<RegularActivities/>}/>
        <Route path="/ImportantDays" element={<ImportantDays/>}/>
        <Route path="/team" element={<Team />} />
        <Route path="/nssunit" element={<NssUnit />} />
        <Route path="/unit1" element={<Unit1 />} />
        <Route path="/unit2" element={<Unit2 />} />
        <Route path='TeamMembers1' element={<TeamMembers1/>}/>
        <Route path='TeamMembers2' element={<TeamMembers2/>}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/notificationbar" element={<NotificationBar />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/jntuknssteam" element={<JntukNssTeam />} />
        {/* Add more routes as needed */}
        <Route path="/formpage" element={<FormPage />} />
        {/* Route for Download button */}
        <Route path="/download" element={<Downloads />} />
        <Route path="/downloadform" element={<Downloadform />} />
        <Route path="/updateform" element={<Updateform />} />
        <Route path="/latestnews" element={<Latestnewsbutton />} />
        <Route path='/deleteupdates' element={<Deleteupdates />} />
        <Route path='/deleteevents' element={<Deleteevents/>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
