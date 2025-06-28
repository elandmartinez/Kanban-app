import React from 'react';

import './index.css';
import Header from './components/Header';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <MainSection /> */}

      <div className="min-h-screen bg-green-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-red-500">Tailwind is working</h1>
      </div>
    </div>
  );
}

export default App;
