import React, { useState } from 'react';
import { AppState } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import PortfolioHome from './components/PortfolioHome';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.WELCOME);

  const handleEnter = () => {
    setAppState(AppState.EXITING);
    // Wait for the exit animation to finish before showing home
    setTimeout(() => {
      setAppState(AppState.HOME);
    }, 1500);
  };

  return (
    <div className="w-full h-screen relative overflow-hidden bg-slate-950 text-white">
      {appState !== AppState.HOME && (
        <WelcomeScreen 
          onEnter={handleEnter} 
          isExiting={appState === AppState.EXITING} 
        />
      )}
      
      {appState === AppState.HOME && (
        <PortfolioHome />
      )}
    </div>
  );
};

export default App;