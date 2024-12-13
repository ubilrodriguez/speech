// SpeechToText.js
import React, { useState, useEffect } from 'react';
import annyang from 'annyang';

const SpeechToText = ({ setActiveMenu, speak }) => {
  const [transcription, setTranscription] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (annyang) {
      const commands = {
        '*comando': function(comando) {
          const comandoNormalizado = comando.toLowerCase().trim();
          
          if (comandoNormalizado === 'paciente') {
            setActiveMenu('1');
            speak('Cambiado a menú paciente');
            setTranscription('menu 1');
          } else if (comandoNormalizado === 'prestaciones') {
            setActiveMenu('2');
            speak('Cambiado a menú de prestaciones');
            setTranscription('menu 2');
          } else if (comandoNormalizado === 'transacciones') {
            setActiveMenu('3');
            speak('Cambiado a menú de transacciones');
            setTranscription('menu 3');
          } else if (comandoNormalizado === 'usuario') {
            setActiveMenu('4');
            speak('Cambiado a menú de usuario');
            setTranscription('menu 4');
          } else {
            setTranscription(`Comando no reconocido: ${comando}`);
          }
        }
      };

      annyang.setLanguage('es-ES');
      annyang.addCommands(commands);

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
  }, [setActiveMenu, speak]);

  const startListening = () => {
    if (annyang) {
      try {
        annyang.start({ 
          autoRestart: false, 
          continuous: true
        });
        setStatus('Escuchando comandos...');
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

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 w-64">
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold">Reconocimiento de voz</h2>
      </div>
      <textarea 
        value={transcription}
        placeholder="Los comandos aparecerán aquí..."
        readOnly
        className="w-full h-40 p-2 border rounded-md mb-4"
      />
      <div className="status-message text-center mb-4 text-gray-600">
        {status}
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <button 
          onClick={startListening}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Iniciar Escucha
        </button>
        <button 
          onClick={stopListening}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Detener
        </button>
      </div>
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold">Comandos disponibles:</h3>
        <ul className="list-none mb-4">
          <li className="text-gray-600">- paciente</li>
          <li className="text-gray-600">- prestaciones</li>
          <li className="text-gray-600">- transacciones</li>
          <li className="text-gray-600">- usuario</li>
        </ul>
      </div>
    </div>
  );
};

export default SpeechToText;