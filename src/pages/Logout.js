import React from 'react';

const Logout = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: 'url("https://wallpapercave.com/wp/wp8130839.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: 'backgroundShift 15s ease-in-out infinite',
      }}
    >
      <div className="bg-white/70 p-10 rounded-lg shadow-xl text-center max-w-md">
        <h1 className="text-4xl font-extrabold text-black">Thank You!</h1>
        <p className="text-lg text-gray-700 mt-4">
          We hope you enjoyed your time with <strong>MusicVerse</strong>. Stay tuned for more musical experiences, and we look forward to welcoming you back soon!
        </p>
        <p className="text-gray-700 mt-2">
          Remember, the world of music is endless – let <strong>MusicVerse</strong> be your guide whenever you're ready to explore again.
        </p>
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

export default Logout;
