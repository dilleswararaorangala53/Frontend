
import React from 'react';
import AppRouter from './AppRouter';
import './App.css'; 
import NewsEvents from './pages/NewsEvents';// Import your app-specific styles if needed

function App() {
  return (
    <div className="app">
      <AppRouter />
      <NewsEvents />
    </div>
  );
}

export default App;
