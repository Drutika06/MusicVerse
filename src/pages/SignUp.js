import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false); // State to control showing the login button
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Please enter all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Regex to check for at least one uppercase letter, one number, and one special character
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      setError("Password must contain at least one uppercase letter, one number, and one special character.");
      return;
    }

    try {
      // Normally, you would send the user data to a server to create an account
      // For now, we simulate a successful signup

      setError(""); // Clear any previous errors
      setIsSignedUp(true); // Set the signup state to true to show the login button
    } catch (error) {
      console.error("Error during signup:", error);
      setError("There was an error during signup. Please try again.");
    }
  };

  const handleLoginRedirect = () => {
    // After clicking the login button, redirect to the explore page
    navigate("/explore");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        background: 'url("https://wallpapercave.com/wp/wp8130839.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        animation: "backgroundShift 15s ease-in-out infinite",
      }}
    >
      <div className="max-w-md w-full bg-white p-10 shadow-xl rounded-3xl backdrop-blur-lg">
        <h2 className="text-4xl font-extrabold text-center text-gradientblue-800 mb-8">
          Signup with MusicVerse
        </h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {!isSignedUp ? (
          <form onSubmit={handleSignup}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 text-gray-800 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-lg font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 text-gray-800 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-lg font-semibold text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-4 text-gray-800 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold py-3 rounded-lg mt-4 hover:bg-green-700 transition duration-300"
              disabled={!email || !password || !confirmPassword}
            >
              Sign Up
            </button>
          </form>
        ) : (
          <div className="text-center mt-6">
            <p className="text-gray-600">You have successfully signed up!</p>
            <button
              onClick={handleLoginRedirect}
              className="w-full bg-green-500 text-white text-lg font-semibold py-3 rounded-lg mt-4 hover:bg-green-700 transition duration-300"
            >
              Login
            </button>
          </div>
        )}

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

export default SignUp;
