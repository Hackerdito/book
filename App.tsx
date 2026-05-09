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

  const handleBackToWelcome = () => {
    setAppState(AppState.WELCOME);
  };

  return (
    <div className="w-full min-h-screen relative bg-slate-950 text-white selection:bg-indigo-500/30">
      {appState !== AppState.HOME && (
        <WelcomeScreen 
          onEnter={handleEnter} 
          isExiting={appState === AppState.EXITING} 
        />
      )}
      
      {appState === AppState.HOME && (
        <PortfolioHome onLogoClick={handleBackToWelcome} />
      )}
    </div>
  );
};

export default App;