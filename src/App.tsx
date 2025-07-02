import React from 'react';
import Chatbot from './components/Chatbot';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Chatbot Simple</h1>
      <Chatbot />
    </div>
  );
};

export default App;
