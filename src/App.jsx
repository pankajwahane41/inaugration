import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import JusticeIntroduction from './components/JusticeIntroduction';
import RibbonCutting from './components/RibbonCutting';
import Celebration from './components/Celebration';
import WebsiteReveal from './components/WebsiteReveal';

function App() {
  const [currentStage, setCurrentStage] = useState('welcome');
  // Stages: 'welcome' -> 'introduction' -> 'ribbon' -> 'celebration' -> 'reveal'

  return (
    <div className="app">
      {currentStage === 'welcome' && (
        <WelcomeScreen onProceed={() => setCurrentStage('introduction')} />
      )}
      {currentStage === 'introduction' && (
        <JusticeIntroduction onProceed={() => setCurrentStage('ribbon')} />
      )}
      {currentStage === 'ribbon' && (
        <RibbonCutting onComplete={() => setCurrentStage('celebration')} />
      )}
      {currentStage === 'celebration' && (
        <Celebration onComplete={() => setCurrentStage('reveal')} />
      )}
      {currentStage === 'reveal' && <WebsiteReveal />}
    </div>
  );
}

export default App;
