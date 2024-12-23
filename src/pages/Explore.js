import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
  // Sample concert data
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
      {/* Hero Section with Background Image */}
      <div 
        className="py-12 text-center"
        style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/050/392/183/non_2x/abstract-musical-background-with-colorful-watercolor-splashes-and-depth-of-field-photo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h1 className="text-5xl font-extrabold text-gradient blue">Explore MusicVerse</h1>
        <p className="mt-5 text-xl font-bold text-gradient blue">A world of music awaits you! Dive into learning, playing, and enjoying music like never before.</p>
      </div>

      {/* Features Section with Background Image */}
      <div 
        className="py-16 px-6 max-w-screen-xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-gardient blue-800 mb-12">
          Explore Our Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Learn Music Feature */}
          <Link to="/tutorials" className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
            <img src="https://media.istockphoto.com/id/1286091223/vector/music-class-learning-young-students-listen-teacher-man-with-guitar-teaches-children-in.jpg?s=612x612&w=0&k=20&c=BuIkeQsYhTgkvyLF2K2B6dL3objQg7uY0olwDsfzHAs=" alt="Learn Music" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-3xl font-semibold text-gray-800">Learn Music</h3>
            <p className="mt-6 text-gray-600">
              Whether you're a beginner or advanced, we offer resources to help you learn your favorite instruments and music theory.
            </p>
          </Link>

          {/* Play Music Games Feature */}
          <Link to="/games" className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
            <img src="https://www.songtub.com/wp-content/uploads/2023/12/background-music-for-gaming-videos.jpg" alt="Music Games" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-3xl font-semibold text-gray-800">Play Music Games</h3>
            <p className="mt-6 text-gray-600">
              Challenge yourself and sharpen your skills with interactive music games that test your rhythm, notes, and musical knowledge.
            </p>
          </Link>

          {/* Enjoy Music Feature */}
          <Link to="/mood" className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
            <img src="https://www.shutterstock.com/image-photo/stylish-fashion-teenager-model-wearing-260nw-1678390384.jpg" alt="Enjoy Music" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-3xl font-semibold text-gray-800">Enjoy Music</h3>
            <p className="mt-6 text-gray-600">
              Discover new songs, albums, and artists with personalized music recommendations to suit your mood.
            </p>
          </Link>
        </div>
      </div>

      {/* Live Concerts Section with Background Image */}
      <div className="py-16 px-6" style={{ backgroundImage: 'url(https://www.shutterstock.com/image-vector/silhouette-people-raise-hand-concert-600nw-1613446321.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className="text-5xl font-bold text-center text-gradient blue-800 mb-12">
          Live Concerts and Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Upcoming Concert */}
          <div className="bg-white p-12 rounded-lg shadow-xl max-w-2xl mx-auto">
            <img 
              src={upcomingConcert.imageUrl} 
              alt="Live Concert" 
              className="w-full h-80 object-cover rounded-lg mb-6"
            />
            <h3 className="text-5xl font-semibold text-black-800">{upcomingConcert.bandName}</h3>
            <p className="mt-6 text-black-600">
              Stay updated with the latest live concerts and music events happening around you.
            </p>
            
            <Link 
              to={{ pathname: '/concert-details', state: upcomingConcert }} 
              className=" text-pink-400 mt-6 block font-semibold hover:text-teal-500"
            >
              See More
            </Link>
          </div>

          {/* Virtual Concert */}
          <div className="bg-white p-12 rounded-lg shadow-xl max-w-2xl mx-auto">
            <img 
              src={virtualConcert.imageUrl} 
              alt="Virtual Concert" 
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            <h3 className="text-3xl font-semibold text-gray-800">{virtualConcert.bandName}</h3>
            <p className="mt-6 font-semibold text-black-600">
              Experience live music from the comfort of your home with our virtual concert events.
            </p>
            <Link 
              to={{ pathname: '/concert-details', state: virtualConcert }} 
              className=" text-pink-400 mt-6 block font-semibold hover:text-teal-500"
            >
              See More
            </Link>
          </div>
        </div>
      </div>

      {/* Other Music Activities Section */}
      <div className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          More Music Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Music Challenges */}
          <Link to="/games" className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
            <img src="https://img.freepik.com/premium-photo/poster-world-music-day-with-rainbow-background_1010572-22123.jpg" alt="Music Challenges" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-3xl font-semibold text-gray-800">Music Challenges</h3>
            <p className="mt-5 text-gray-600">
              Take part in weekly music challenges and compete with others to showcase your talent.
            </p>
            <Link to="/games" className="text-pink-400 mt-4 block font-semibold hover:text-pink-500">Join Now</Link>
          </Link>

          {/* Create Playlists */}
          <Link to="/mood" className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
            <img src="https://funbestfun.com/wp-content/uploads/2022/02/playlist.jpg" alt="Create Playlists" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-3xl font-semibold text-gray-800">Create Playlists</h3>
            <p className="mt-5 text-gray-600">
              Curate and share your personalized playlists with your friends and the MusicVerse community.
            </p>
            <Link to="/library" className="text-pink-400 mt-4 block font-semibold hover:text-pink-500">Create Playlist</Link>
          </Link>

          {/* Music Collaborations */}
          <Link to="/tutorials" className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
            <img src="https://images.squarespace-cdn.com/content/v1/64b7283a7d35650b175fcb36/1704386987050-AON0JMBMZYRJBN70315N/DALL%C2%B7E+2024-01-04+11.49.34+-+Widescreen+illustration+showing+a+diverse+group+of+musicians+from+different+genres+collaborating+in+a+recording+studio%2C+with+elements+representing+var.png" alt="Music Collaborations" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-3xl font-semibold text-gray-800">Music Collaborations</h3>
            <p className="mt-5 text-gray-600">
              Connect with musicians around the world to collaborate and create new music.
            </p>
            <Link to="/tutorials" className="text-pink-400 mt-4 block font-semibold hover:text-pink-500">Start Collaborating</Link>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
