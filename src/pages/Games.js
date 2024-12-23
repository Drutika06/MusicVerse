import React, { useState } from "react";

// Music Trivia Quiz Data (Indian Music)
const quizzes = [
  {
    level: 1,
    questions: [
      {
        question: "Who is known as the 'Nightingale of India'?",
        options: ["Lata Mangeshkar", "Shreya Ghoshal", "Kishori Amonkar", "Asha Bhosle"],
        answer: "Lata Mangeshkar",
      },
      {
        question: "Which Indian classical dance form originates from Tamil Nadu?",
        options: ["Kathak", "Bharatanatyam", "Odissi", "Kathakali"],
        answer: "Bharatanatyam",
      },
    ],
  },
  {
    level: 2,
    questions: [
      {
        question: "Which musician is known for the fusion of classical and contemporary music?",
        options: ["A. R. Rahman", "Ravi Shankar", "Zakir Hussain", "Bikram Ghosh"],
        answer: "A. R. Rahman",
      },
      {
        question: "Who composed the music for the Indian national anthem?",
        options: ["C. R. Subramaniam", "Rabindranath Tagore", "Bhimsen Joshi", "M. S. Subbulakshmi"],
        answer: "Rabindranath Tagore",
      },
      {
        question: "Which famous Indian artist is known for his contribution to Indian classical music as a sitar maestro?",
        options: ["Ustad Zakir Hussain", "Pandit Ravi Shankar", "Ustad Amjad Ali Khan", "Pandit Bhimsen Joshi"],
        answer: "Pandit Ravi Shankar",
      },
    ],
  },
  {
    level: 3,
    questions: [
      {
        question: "Which Indian singer is famous for his playback singing in Bollywood and also has a world record for the most songs sung in multiple languages?",
        options: ["Sonu Nigam", "Arijit Singh", "Kumar Sanu", "Hariharan"],
        answer: "Kumar Sanu",
      },
      {
        question: "Which classical music tradition is associated with the Carnatic music system?",
        options: ["North Indian", "South Indian", "Both", "None"],
        answer: "South Indian",
      },
      {
        question: "What is the name of A. R. Rahman's famous album that gained international recognition for the film 'Slumdog Millionaire'?",
        options: ["Dil Se", "Roja", "Jai Ho", "Taal"],
        answer: "Jai Ho",
      },
      {
        question: "Which of the following is a famous classical raga in Hindustani music?",
        options: ["Raga Bageshree", "Raga Marwa", "Raga Desh", "Raga Bhairavi"],
        answer: "Raga Bageshree",
      },
      {
        question: "Which famous Bollywood music composer is known for the music in movies like 'Dilwale Dulhania Le Jayenge'?",
        options: ["Jatin-Lalit", "Nadeem-Shravan", "Laxmikant-Pyarelal", "Anu Malik"],
        answer: "Jatin-Lalit",
      },
      {
        question: "Who is known as the 'King of Bollywood Music'?",
        options: ["A. R. Rahman", "Anu Malik", "Nadeem-Shravan", "Rajesh Roshan"],
        answer: "A. R. Rahman",
      },
      {
        question: "Which instrument is known as the 'Queen of Indian Instruments'?",
        options: ["Veena", "Sitar", "Tabla", "Flute"],
        answer: "Veena",
      },
      {
        question: "Which musician is credited with popularizing the fusion genre of Indian music?",
        options: ["Ravi Shankar", "A. R. Rahman", "Bikram Ghosh", "Zakir Hussain"],
        answer: "A. R. Rahman",
      },
      {
        question: "Who is the composer of the famous song 'Vande Mataram'?",
        options: ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "A. R. Rahman", "Kavi Pradeep"],
        answer: "Bankim Chandra Chattopadhyay",
      },
    ],
  },
];

// Instrument Identification Game Data
const instruments = [
  {
    image: "https://media.ipassio.com/media/ckeditor_image/2022/12/05/guitar.jpg",
    options: ["Guitar", "Piano", "Drums"],
    answer: "Guitar",
  },
  {
    image: "https://img.freepik.com/premium-photo/piano-keyboard-hd-8k-vector-illustration-wallpaper-stock-image_915071-36521.jpg",
    options: ["Guitar", "Piano", "Drums"],
    answer: "Piano",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/005/704/483/non_2x/drums-and-drum-set-photo.jpg",
    options: ["Guitar", "Piano", "Drums"],
    answer: "Drums",
  },
];

const GameCard = ({ title, description, onClick, imageUrl }) => {
  return (
    <div
      onClick={onClick}
      className="bg-blue-800 text-gray-200 p-6 rounded-lg shadow-lg hover:bg-blue-700 cursor-pointer transition duration-300 transform hover:scale-105"
    >
      <img src={imageUrl} alt={title} className="h-32 w-full object-cover mb-4 rounded-lg transition duration-300 transform hover:scale-110" />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
};

const MusicMaster = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(""); // Track selected answer
  const [instrumentAnswer, setInstrumentAnswer] = useState("");
  const [instrumentIndex, setInstrumentIndex] = useState(0);
  const [gameResult, setGameResult] = useState(null);

  // Handle Quiz Game
  const handleQuizAnswer = (answer) => {
    if (
      quizzes[currentLevel] &&
      quizzes[currentLevel].questions &&
      quizzes[currentLevel].questions[currentQuestionIndex] &&
      answer === quizzes[currentLevel].questions[currentQuestionIndex].answer
    ) {
      setScore(score + 1);
    }
    setSelectedAnswer("");
    if (currentQuestionIndex < (quizzes[currentLevel]?.questions.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (currentLevel < quizzes.length - 1) {
        setCurrentLevel(currentLevel + 1);
        setCurrentQuestionIndex(0);
      } else {
        if (score >= 10) {
          setGameResult("You Won!");
        } else {
          setGameResult("You Lost!");
        }
      }
    }
  };

  // Handle Instrument Identification Game
  const handleInstrumentSelection = (answer) => {
    if (answer === instruments[instrumentIndex].answer) {
      setScore(score + 1);
    }
    if (instrumentIndex < instruments.length - 1) {
      setInstrumentIndex(instrumentIndex + 1);
      setInstrumentAnswer("");
    } else {
      if (score >= 2) {
        setGameResult("You Won!");
      } else {
        setGameResult("You Lost!");
      }
    }
  };

  const handleGameSelection = (game) => {
    setSelectedGame(game);
    setScore(0);
    setGameResult(null);
  };

  const handleReturnToAllGames = () => {
    setSelectedGame(null);
    setScore(0);
    setGameResult(null);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-8 flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://media.istockphoto.com/id/1097384996/vector/future-retro-line-background-of-the-80s-vector-futuristic-synth-retro-wave-illustration-in.jpg?s=612x612&w=0&k=20&c=kWQ2d93PX3e8PikUJubHdeziD9ZAG9eg3T9qBDWUiJw=")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        animation: "moveBackground 10s infinite linear",
      }}
    >
      <div className="max-w-7xl mx-auto text-center bg-gray-800 bg-opacity-80 p-10 rounded-xl shadow-xl transition duration-500 transform hover:scale-105">
        <h1 className="text-3xl font-bold mb-10 text-gray-100">MusicMaster Games</h1>

        {/* Display Selected Game */}
        {selectedGame ? (
          selectedGame.title === "Music Trivia" ? (
            <div className="bg-blue-700 text-gray-200 p-10 rounded-lg shadow-lg animate__animated animate__fadeIn">
              <h2 className="text-3xl font-semibold mb-6">Level {currentLevel + 1} - Music Trivia</h2>
              <p className="text-xl mb-6">
                Question {currentQuestionIndex + 1}: {quizzes[currentLevel].questions[currentQuestionIndex]?.question}
              </p>
              <div className="space-y-4 mb-6">
                {quizzes[currentLevel].questions[currentQuestionIndex]?.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedAnswer(option)} // Set the selected answer on click
                    className={`text-white px-6 py-2 rounded-lg w-full transition duration-300 ${
                      selectedAnswer === option
                        ? "bg-blue-500 transform scale-105"
                        : "bg-blue-600 hover:bg-blue-500"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                onClick={() => handleQuizAnswer(selectedAnswer)}
                className="text-white bg-green-500 px-6 py-2 rounded-lg w-full"
              >
                Submit Answer
              </button>
              {gameResult && (
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold">{gameResult}</h2>
                  <p className="text-lg">Your Score: {score}</p>
                </div>
              )}
              <div className="mt-8">
                <button
                  onClick={handleReturnToAllGames}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg"
                >
                  Return to All Games
                </button>
              </div>
            </div>
          ) : selectedGame.title === "Instrument Identification" ? (
            <div className="bg-blue-700 text-gray-200 p-10 rounded-lg shadow-lg animate__animated animate__fadeIn">
              <h2 className="text-3xl font-semibold mb-6">Instrument Identification</h2>
              <img
                src={instruments[instrumentIndex].image}
                alt="Instrument"
                className="w-64 mx-auto mb-6 rounded-lg transform transition duration-300 hover:scale-105"
              />
              <p className="text-xl mb-6">Select the instrument:</p>
              <div className="space-y-4 mb-6">
                {instruments[instrumentIndex].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setInstrumentAnswer(option)} // Set the instrument answer on click
                    className={`text-white px-6 py-2 rounded-lg w-full transition duration-300 ${
                      instrumentAnswer === option
                        ? "bg-blue-500 transform scale-105"
                        : "bg-blue-600 hover:bg-blue-500"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                onClick={() => handleInstrumentSelection(instrumentAnswer)}
                className="text-white bg-green-500 px-6 py-2 rounded-lg w-full"
              >
                Submit Answer
              </button>
              {gameResult && (
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold">{gameResult}</h2>
                  <p className="text-lg">Your Score: {score}</p>
                </div>
              )}
              <div className="mt-8">
                <button
                  onClick={handleReturnToAllGames}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg"
                >
                  Return to All Games
                </button>
              </div>
            </div>
          ) : null
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <GameCard
              title="Music Trivia"
              description="Test your music knowledge!"
              onClick={() => handleGameSelection({ title: "Music Trivia" })}
              imageUrl="https://www.rockandrollbingo.co.uk/wp-content/uploads/2023/10/Music.jpeg"
            />
            <GameCard
              title="Instrument Identification"
              description="Identify musical instruments!"
              onClick={() => handleGameSelection({ title: "Instrument Identification" })}
              imageUrl="https://thumbs.dreamstime.com/z/abstract-representation-music-notes-instruments-vibrant-colors-energetic-dynamic-illustration-related-de-designs-305099766.jpg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicMaster;
