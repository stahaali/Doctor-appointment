import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; 
import AppContextProvider from './context/AppContext.jsx';
import { doctors } from '../data.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider doctors={doctors}>
      <App />
    </AppContextProvider>
  </StrictMode>
);
