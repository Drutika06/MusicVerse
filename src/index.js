import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Your global CSS file (includes Tailwind CSS)
import App from './App'; // Your main app component
import reportWebVitals from './reportWebVitals'; // For performance monitoring
import '@fortawesome/fontawesome-free/css/all.min.css';

// Create a root element using React 18's createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
