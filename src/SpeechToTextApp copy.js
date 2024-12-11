import React, { useState, useEffect } from 'react';
import annyang from 'annyang';

function SpeechToTextApp() {
  const [transcription, setTranscription] = useState('');
  const [status, setStatus] = useState('');
  const [lastWord, setLastWord] = useState('');

  useEffect(() => {
    // Verificar si annyang está disponible
    if (annyang) {
      // Configurar el comando de reconocimiento de voz para español
      const commands = {
        '*palabra': function(palabra) {
          // Actualizar transcripción
          setTranscription(prev => prev + ' ' + palabra);
          
          // Guardar la última palabra escuchada
          setLastWord(palabra);
          
          // Reproducir confirmación de palabra
          speak(`Palabra entendida: ${palabra}`);
        }
      };

      // Configurar idioma español
      annyang.setLanguage('es-ES');

      // Añadir los comandos
      annyang.addCommands(commands);

      // Manejar errores de reconocimiento
      annyang.addCallback('errorNetwork', () => {
        setStatus('Error de red en el reconocimiento de voz');
      });

      annyang.addCallback('errorPermissionBlocked', () => {
        setStatus('Permiso de micrófono bloqueado');
      });

      annyang.addCallback('errorPermissionDenied', () => {
        setStatus('Permiso de micrófono denegado');
      });
    }
  }, []);

  // Función para reproducir audio de confirmación
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    window.speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    if (annyang) {
      try {
        annyang.start({ 
          autoRestart: false, 
          continuous: true,
          paused: false
        });
        setStatus('Escuchando en español...');
      } catch (error) {
        setStatus('Error al iniciar la escucha');
        console.error(error);
      }
    } else {
      setStatus('Reconocimiento de voz no soportado');
    }
  };

  const stopListening = () => {
    if (annyang) {
      annyang.abort();
      setStatus('Escucha detenida');
    }
  };

  // Limpiar transcripción
  const clearTranscription = () => {
    setTranscription('');
    setLastWord('');
    setStatus('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Transcripción de Voz en Español
        </h1>
        
        <textarea 
          className="w-full h-40 p-4 border rounded-md mb-4 resize-none"
          value={transcription}
          placeholder="El texto transcrito aparecerá aquí..."
          readOnly
        />
        
        <div className="status-message text-center mb-4 text-gray-600">
          {status}
        </div>
        
        {lastWord && (
          <div className="text-center mb-4 text-green-600">
            Última palabra: {lastWord}
          </div>
        )}
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={startListening}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Iniciar Audio
          </button>
          <button 
            onClick={stopListening}
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
          >
            Detener
          </button>
          <button 
            onClick={clearTranscription}
            className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition"
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpeechToTextApp;