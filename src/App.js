// App.js
import React, { useState, useCallback } from 'react';
import { Mic, MicOff } from 'lucide-react';
import SpeechToText from './components/SpeechToText';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';

function App() {
  const [activeMenu, setActiveMenu] = useState(null);

  const speak = useCallback((text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    window.speechSynthesis.speak(utterance);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <SpeechToText setActiveMenu={setActiveMenu} speak={speak} />
      <Sidebar activeMenu={activeMenu} onMenuSelect={setActiveMenu} />
      <Layout activeMenu={activeMenu} />
    </div>
  );
}

export default App;