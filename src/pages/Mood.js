import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Mood = () => {
  const [tracks, setTracks] = useState([]); // Store fetched tracks
  const playlistId = '37i9dQZF1DX4Wsb4d7NKfP'; // Replace with your playlist ID

  // Fetch tracks when the component mounts
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const options = {
          method: 'GET',
          url: `https://spotify23.p.rapidapi.com/playlist_tracks/`,
          params: {
            id: playlistId,
            offset: '0',
            limit: '20',
          },
          headers: {
            'x-rapidapi-key': 'c64aad9785msh0c3eacbbd26f8e4p17dc59jsn5013947a90b3',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com',
          },
        };

        const response = await axios.request(options);
        setTracks(response.data.items || []);
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    };

    fetchTracks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-6">Playlists</h1>

        {/* Display playlists */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tracks.map((track, index) => (
            <Link
              to="/tracks" // Navigate to the Tracks page
              key={index} // Use the index as the key
              className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition"
            >
              <h2 className="text-lg font-semibold mb-2 text-center">
                {track.track.name}
              </h2>
              {track.track.album.images[0] && (
                <img
                  src={track.track.album.images[1]?.url || track.track.album.images[0].url} // Use a smaller image or fallback to a larger one
                  alt={track.track.name}
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
              )}
              <p className="text-gray-400 text-sm text-center">
                {track.track.artists.map((artist) => artist.name).join(', ')}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mood;
