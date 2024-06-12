import React from 'react';
import { createRoot } from 'react-dom/client'; //react-dom/client per evitare errore in console
import Blog from './components/Blog';
import './styles/global.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Blog />
  </React.StrictMode>
);
