import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Import from react-dom/client
import './index.css';
import './mediaqueries.css';
import App from './App';
// React 18 has deprecated ReactDOM.render in favor of createRoot
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


