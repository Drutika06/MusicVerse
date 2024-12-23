import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Mood = () => {
  const [playlists, setPlaylists] = useState([]); // Store fetched playlists

  // Fetch playlists when the component mounts
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get(
          'https://v1.nocodeapi.com/drutika/spotify/FvSruGylpkJWfVtd/myPlaylists'
        );
        setPlaylists(response.data.items || []);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };
    fetchPlaylists();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-10">
        <h1 className="text-5xl font-bold text-center mb-8">Mood Playlists</h1>

        {/* Display playlists */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {playlists.map((playlist) => (
            <Link
              key={playlist.id}
              to={`/mood/tracks/${playlist.id}`} // Navigate to Tracks page with playlist ID
              className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition"
            >
              <h2 className="text-2xl font-semibold mb-4 text-center">{playlist.name}</h2>
              {playlist.images[0] && (
                <img
                  src={playlist.images[0].url}
                  alt={playlist.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <p className="text-gray-400 text-sm text-center">Click to view tracks</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mood;