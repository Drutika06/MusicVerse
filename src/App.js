import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Navbar component for navigation
import Home from './pages/Home';           // Home page component
import SignUp from './pages/SignUp';       // Sign Up page component
import Tutorials from './pages/Tutorials'; // Tutorials page component
import Mood from './pages/Mood';           // Mood page component
import Games from './pages/Games';         // Games page component
import Explore from './pages/Explore';     // Explore page component
import ConcertDetails from './pages/ConcertDetails';  // Concert Details page component
import Logout from './pages/Logout';       // Logout page component
import Tracks from './pages/Tracks';       // Tracks page for Mood playlists
import MusicTheory from './pages/MusicTheory';        // Music Theory page component

const App = () => {
  return (
    <Router>
      {/* Navbar displayed on all pages */}
      <Navbar />

      {/* Define application routes */}
      <Routes>
        <Route path="/" element={<Home />} />             {/* Home route */}
        <Route path="/signup" element={<SignUp />} />     {/* Sign Up route */}
        <Route path="/tutorials" element={<Tutorials />} /> {/* Tutorials route */}
        <Route path="/tutorials/music-theory" element={<MusicTheory />} /> {/* Music Theory route */}
        <Route path="/mood" element={<Mood />} />         {/* Mood route */}
        <Route path="/mood/tracks/:playlistId" element={<Tracks />} /> {/* Tracks route for playlists */}
        <Route path="/games" element={<Games />} />       {/* Games route */}
        <Route path="/explore" element={<Explore />} />   {/* Explore route */}
        <Route path="/concert-details" element={<ConcertDetails />} />  {/* Concert Details route */}
        <Route path="/logout" element={<Logout />} />     {/* Logout route */}
      </Routes>
    </Router>
  );
};

export default App;

