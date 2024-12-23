import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [isSignedUp, setIsSignedUp] = useState(false); // Track signup status
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isSignedUp) {
      // If user is signed up, navigate to explore
      navigate('/explore');
    } else {
      // If user is not signed up, redirect to signup page
      navigate('/signup');
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen text-white"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: 'backgroundShift 15s ease-in-out infinite',
      }}
    >
      {/* Hero Section */}
      <div className="relative w-full h-full flex flex-col justify-center items-center text-center p-10 space-y-6">
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold tracking-wide leading-tight">
            Welcome to <span className="text-yellow-300">MusicVerse</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mt-6 text-white/90">
            Discover new ways to engage with music – whether it's learning, playing games, or simply enjoying your favorite tunes.
          </p>
          <div className="mt-8">
            <button
              onClick={handleGetStarted}
              className="bg-yellow-400 text-gray-900 py-3 px-8 rounded-full text-lg font-semibold transition-transform transform hover:scale-110 hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="mt-16 py-12 px-6 w-full">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          How <span className="text-yellow-300">MusicVerse</span> Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature Cards */}
          <div className="p-8 rounded-lg shadow-2xl bg-white/90 hover:scale-105 hover:shadow-xl transition-all transform">
            <h3 className="text-3xl font-bold text-gray-900">Learn Music</h3>
            <p className="mt-4 text-gray-600">
              MusicVerse provides you with resources to learn your favorite instruments and music theory to enhance your skills.
            </p>
          </div>
          <div className="p-8 rounded-lg shadow-2xl bg-white/90 hover:scale-105 hover:shadow-xl transition-all transform">
            <h3 className="text-3xl font-bold text-gray-900">Play Music Games</h3>
            <p className="mt-4 text-gray-600">
              Engage with music through interactive games that challenge your rhythm, notes, and musical knowledge.
            </p>
          </div>
          <div className="p-8 rounded-lg shadow-2xl bg-white/90 hover:scale-105 hover:shadow-xl transition-all transform">
            <h3 className="text-3xl font-bold text-gray-900">Enjoy Music</h3>
            <p className="mt-4 text-gray-600">
              Whether you are feeling upbeat or relaxed, MusicVerse helps you discover and enjoy a variety of music tailored to your preferences.
            </p>
          </div>
        </div>
      </div>

      

      <style>
        {`
          @keyframes backgroundShift {
            0% {
              background-image: url('https://wallpapercave.com/wp/wp8130839.jpg');
            }
            33% {
              background-image: url('https://axerosolutions.com/assets/Uploaded-CMS-Files/1c3bc747-fef3-4ce9-a3ae-dc94f44fbcb1.jpg');
            }
            66% {
              background-image: url('https://lillenorge.de/wp-content/uploads/sites/58/2021/02/5-1.jpeg');
            }
            100% {
              background-image: url('https://androidcure.com/wp-content/uploads/2023/02/bluetooth-speaker-party.jpg');
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
