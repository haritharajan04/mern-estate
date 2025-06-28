import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ make sure this path matches
import './index.css'; // Tailwind styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

