import React, { useState, useRef, useEffect } from "react";

const Track = ({ song, currentTrack, setCurrentTrack }) => {
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const isCurrentTrack = currentTrack === song.id;

  const [progress, setProgress] = useState(0); // Progress of the audio

  const handlePlayPause = () => {
    if (isCurrentTrack) {
      // If this is the current track, toggle play/pause
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      // If switching to a new track, pause the previous one and play this one
      if (currentTrack !== null) {
        const previousAudio = document.getElementById(`audio-${currentTrack}`);
        if (previousAudio) previousAudio.pause();
      }
      setCurrentTrack(song.id);
      audioRef.current.play();
    }
  };

  // Handle the time update for progress bar
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  // Sync progress bar with audio
  const handleProgressClick = (e) => {
    const progressBarWidth = progressRef.current.offsetWidth;
    const offsetX = e.nativeEvent.offsetX;
    const newTime = (offsetX / progressBarWidth) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  };

  return (
    <div
      className="text-white rounded-lg w-80 h-96 flex flex-col items-center justify-between p-4 shadow-lg"
      style={{ backgroundColor: "#2C3E50" }}
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
      <div className="w-full flex items-center justify-center">
        <button onClick={handlePlayPause} className="bg-white text-[#2C3E50] rounded-full p-3">
          {isCurrentTrack && !audioRef.current?.paused ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </button>
        <audio
          id={`audio-${song.id}`}
          ref={audioRef}
          src={song.audio}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setCurrentTrack(null)}
        />
      </div>

      {/* Progress Bar */}
      <div
        ref={progressRef}
        className="w-full bg-gray-600 rounded-full cursor-pointer"
        style={{ height: "5px", marginTop: "10px" }}
        onClick={handleProgressClick}
      >
        <div
          className="bg-white h-full rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

const Tracks = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const songs = [
    {
      id: 1,
      title: "Beethoven's Bell",
      artist: "Artist - Yuja Wang",
      image:
        "https://www.shutterstock.com/image-vector/ringtone-vector-icon-260nw-604200236.jpg",
      audio:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Replace with your actual audio link
    },
    {
      id: 2,
      title: "Symphony Echo",
      artist: "Hans Zimmer",
      image:
        "https://yt3.googleusercontent.com/ytc/AIdro_m2at62cg2Vfw4OOdLSVnk3m-tBcsS4xC3p0uk--myz4i8=s900-c-k-c0x00ffffff-no-rj",
      audio:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // Replace with your actual audio link
    },
    {
      id: 3,
      title: "Mozart’s Melody",
      artist: "Murray Perahia ",
      image:
        "https://play-lh.googleusercontent.com/CMDIEDShYphdb7n04KZsEwilXBfAyKuifMVSloL456DLHnXlWU3doPmcKxhwnwim7WY",
      audio:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", // Replace with your actual audio link
    },
    {
      id: 4,
      title: "Rhapsody Ring",
      artist: "John Williams",
      image:
        "https://play-lh.googleusercontent.com/NAeJot3lZX0ryPECsA8R6ChdHHnSYX_zvHkq0_7JkdiQK1Cfy_ft1AMvqSDFu2OBNv4",
      audio:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", // Replace with your actual audio link
    },
    {
      id: 5,
      title: "Baroque Buzz",
      artist: "Freddie Mercury",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFD3KZ4w2Os6qrnQyj0ockQEIlfbS9BidbJsA3AdO2o5Mx_a6jm9K1ZX_dlyqaMl9P-dA&usqp=CAU",
      audio:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", // Replace with your actual audio link
    },
  ];

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-row items-center justify-center space-x-8 p-6"
      style={{
        backgroundImage:
          "url('https://www.onholdinc.com/mohblogimgs/wp-content/uploads/2019/04/record-playing-music_4460x4460.jpg')",
      }}
    >
      {songs.map((song) => (
        <Track
          key={song.id}
          song={song}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
        />
      ))}
    </div>
  );
};

export default Tracks;
