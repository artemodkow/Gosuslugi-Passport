import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global CSS (optional)
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// Optional: reportWebVitals is for measuring performance
reportWebVitals();
