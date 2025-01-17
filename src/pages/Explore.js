import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
  const upcomingConcert = {
    imageUrl: "https://www.shutterstock.com/image-vector/summer-lively-background-festival-outdoor-600nw-2320400509.jpg",
    description: "Join us for an unforgettable night with The Rockers at the iconic Madison Square Garden. Get ready for electrifying performances!"
  };

  const virtualConcert = {
    imageUrl: "https://godreamcast.com/blog/wp-content/uploads/2024/08/AR-and-VR-event-experience.jpg",
    description: "Experience a mind-blowing virtual concert with Virtual Vibes from the comfort of your home!"
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div
        className="py-10 text-center"
        style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/050/392/183/non_2x/abstract-musical-background-with-colorful-watercolor-splashes-and-depth-of-field-photo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h1 className="text-4xl font-bold text-gradient blue">Explore MusicVerse</h1>
        <p className="mt-4 text-lg font-medium text-gradient blue">A world of music awaits you! Dive into learning, playing, and enjoying music like never before.</p>
      </div>

      {/* Features Section */}
      <div className="py-12 px-4 max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Explore Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Learn Music */}
          <Link to="/tutorials" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <img src="https://media.istockphoto.com/id/1286091223/vector/music-class-learning-young-students-listen-teacher-man-with-guitar-teaches-children-in.jpg?s=612x612&w=0&k=20&c=BuIkeQsYhTgkvyLF2K2B6dL3objQg7uY0olwDsfzHAs=" alt="Learn Music" className="w-full h-32 object-cover rounded-lg mb-4"/>
            <h3 className="text-2xl font-semibold text-gray-800">Learn Music</h3>
            <p className="mt-4 text-gray-600">Whether you're a beginner or advanced, we offer resources to help you learn your favorite instruments and music theory.</p>
          </Link>

          {/* Play Music Games */}
          <Link to="/games" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <img src="https://www.songtub.com/wp-content/uploads/2023/12/background-music-for-gaming-videos.jpg" alt="Music Games" className="w-full h-32 object-cover rounded-lg mb-4"/>
            <h3 className="text-2xl font-semibold text-gray-800">Play Music Games</h3>
            <p className="mt-4 text-gray-600">Challenge yourself and sharpen your skills with interactive music games that test your rhythm, notes, and musical knowledge.</p>
          </Link>

          {/* Enjoy Music */}
          <Link to="/mood" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <img src="https://www.shutterstock.com/image-photo/stylish-fashion-teenager-model-wearing-260nw-1678390384.jpg" alt="Enjoy Music" className="w-full h-32 object-cover rounded-lg mb-4"/>
            <h3 className="text-2xl font-semibold text-gray-800">Enjoy Music</h3>
            <p className="mt-4 text-gray-600">Discover new songs, albums, and artists with personalized music recommendations to suit your mood.</p>
          </Link>
        </div>
      </div>

      {/* Live Concerts Section */}
      <div className="py-12 px-4" style={{ backgroundImage: 'url(https://www.shutterstock.com/image-vector/silhouette-people-raise-hand-concert-600nw-1613446321.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className="text-3xl font-semibold text-center text-white mb-8">Live Concerts and Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Concert */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={upcomingConcert.imageUrl} alt="Live Concert" className="w-full h-40 object-cover rounded-lg mb-4"/>
            <h3 className="text-2xl font-semibold text-gray-800">Upcoming Concert</h3>
            <p className="mt-4 text-gray-600">{upcomingConcert.description}</p>
            <Link to="/concert-details" className="text-blue-500 mt-4 block">See More</Link>
          </div>

          {/* Virtual Concert */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={virtualConcert.imageUrl} alt="Virtual Concert" className="w-full h-40 object-cover rounded-lg mb-4"/>
            <h3 className="text-2xl font-semibold text-gray-800">Virtual Concert</h3>
            <p className="mt-4 text-gray-600">{virtualConcert.description}</p>
            <Link to="/concert-details" className="text-blue-500 mt-4 block">See More</Link>
          </div>
        </div>
      </div>

      {/* More Music Activities Section */}
      <div className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">More Music Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Music Challenges */}
          <Link to="/games" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <img src="https://img.freepik.com/premium-photo/poster-world-music-day-with-rainbow-background_1010572-22123.jpg" alt="Music Challenges" className="w-full h-32 object-cover rounded-lg mb-4"/>
            <h3 className="text-2xl font-semibold text-gray-800">Music Challenges</h3>
            <p className="mt-4 text-gray-600">Take part in weekly music challenges and compete with others to showcase your talent.</p>
          </Link>

          {/* Create Playlists */}
          <Link to="/mood" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <img src="https://funbestfun.com/wp-content/uploads/2022/02/playlist.jpg" alt="Create Playlists" className="w-full h-32 object-cover rounded-lg mb-4"/>
            <h3 className="text-2xl font-semibold text-gray-800">Create Playlists</h3>
            <p className="mt-4 text-gray-600">Curate and share your personalized playlists with the MusicVerse community.</p>
          </Link>

          {/* Music Collaborations */}
          <Link to="/tutorials" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <img src="https://images.squarespace-cdn.com/content/v1/64b7283a7d35650b175fcb36/1704386987050-AON0JMBMZYRJBN70315N/DALL%C2%B7E+2024-01-04+11.49.34+-+Widescreen+illustration+showing+a+diverse+group+of+musicians+from+different+genres+collaborating+in+a+recording+studio%2C+with+elements+representing+var.png" alt="Music Collaborations" className="w-full h-32 object-cover rounded-lg mb-4"/>
            <h3 className="text-2xl font-semibold text-gray-800">Music Collaborations</h3>
            <p className="mt-4 text-gray-600">Connect with musicians around the world to collaborate and create new music.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;

