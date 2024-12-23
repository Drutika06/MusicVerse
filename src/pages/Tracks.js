import React from "react";

const Track = ({ song }) => {
  return (
    <div
      className="text-white rounded-lg w-80 h-96 flex flex-col items-center justify-between p-4 shadow-lg"
      style={{ backgroundColor: "#2C3E50" }} // Adjusted container color
    >
      {/* Song Image */}
      <div
        className="w-full h-2/3 rounded-lg"
        style={{
          backgroundImage: `url(${song.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Song Details */}
      <div className="w-full text-center space-y-1">
        <h3 className="text-lg font-semibold">{song.title}</h3>
        <p className="text-sm text-gray-300">{song.artist}</p>
      </div>

      {/* Controls */}
      <div className="w-full flex items-center justify-between">
        <button className="text-gray-400 hover:text-white">
          <i className="fas fa-random"></i>
        </button>
        <button className="text-gray-400 hover:text-white">
          <i className="fas fa-step-backward"></i>
        </button>
        <button className="bg-white text-[#2C3E50] rounded-full p-3">
          <i className="fas fa-play"></i>
        </button>
        <button className="text-gray-400 hover:text-white">
          <i className="fas fa-step-forward"></i>
        </button>
        <button className="text-gray-400 hover:text-white">
          <i className="fas fa-redo"></i>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full space-y-1">
        <div className="h-1 bg-gray-400 rounded-full">
          <div className="h-full w-1/2 bg-white rounded-full"></div>
        </div>
        <div className="flex justify-between text-xs text-gray-300">
          <span>2:27</span>
          <span>-0:34</span>
        </div>
      </div>
    </div>
  );
};

const Tracks = () => {
  const songs = [
    {
      id: 1,
      title: "Song Title - Chuttamalle",
      artist: "Artist - Shilpa Rao",
      image: "https://c.saavncdn.com/411/Chuttamalle-From-Devara-Part-1-Telugu-2024-20240805181008-500x500.jpg",
    },
    {
      id: 2,
      title: "Kesariya",
      artist: "Arijit Singh",
      image: "https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg",
    },
    {
      id: 3,
      title: "STAY",
      artist: "Justin Bieber",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png",
    },
    {
      id: 4,
      title: "Lover",
      artist: "Taylor Swift",
      image: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647",
    },
    {
        id: 5,
        title: "Husn",
        artist: "Anuv Jain",
        image: "https://i.scdn.co/image/ab67616d0000b2730d3449f333a83a25feb423f8",
      },
       
  ];

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-row items-center justify-center space-x-8 p-6"
      style={{
        backgroundImage:
          "url('https://www.onholdinc.com/mohblogimgs/wp-content/uploads/2019/04/record-playing-music_4460x4460.jpg')", // Replace with your image URL
      }}
    >
      {songs.map((song) => (
        <Track key={song.id} song={song} />
      ))}
    </div>
  );
};

export default Tracks;
