import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import FeaturedEvents from "./Pages/Home/FeaturedEvents.jsx";
import TechEventCategories from "./Pages/Home/TechEventCategories.jsx";
import ContactPage from "./Pages/Contact/ContactPage.jsx";
import About from "./Pages/About/About.jsx";
import Login from "./Pages/Auth/Login.jsx";
import SignupPage from "./Pages/Auth/SignupPage.jsx";
import OrganizeEvent from "./Pages/Events/OrganizeEvent.jsx";
import Hackathon from "./Pages/Events/Hackathon.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Conference from "./Pages/Events/Conference.jsx";
import Posts from "./Pages/Posts/Posts.jsx"; 
import Settings from "./Pages/Profile/Settings.jsx";
import Hero from './Pages/Home/Hero.jsx';
import AllEvents from "./Pages/Events/AllEvents.jsx";
// import RegisterPage from './Pages/Events/RegisterPage.jsx';
import GamifiedZynk from './Pages/Events/GamifiedZynk.jsx';
import EventAnalyticsDashboard from './Pages/Auth/EventAnalyticsDashboard.jsx';
import RegistrationPage from './Pages/Events/RegistrationPage.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events/featured" element={<FeaturedEvents />} />
          {/* <Route path="/events" element={<TechEventCategories />} /> */}
          {<Route path="/hero" element={<Hero />} /> }
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/events/organize-events" element={<OrganizeEvent />} />
          <Route path="/events/conferences" element={<Conference />} />
          <Route path="/events/hackathons" element={<Hackathon />} />
          {/* <Route path="/events/all" element={<Hero/>} /> */}
          {/* <Route path="/hackathons" element={<Hackathon />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/events/all" element={<AllEvents />} />
          {/* <Route path="/register" element={<RegisterPage />} />  */}
          <Route path="/game" element={<GamifiedZynk />} /> 
          <Route path="/analytics" element={<EventAnalyticsDashboard />} /> 
          <Route path="/register" element={<RegistrationPage />} /> 
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
