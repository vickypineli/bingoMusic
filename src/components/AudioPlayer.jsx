import PropTypes from 'prop-types';
import '../App.css';
import { useEffect, useRef} from 'react';
import tracks from './tracks'; 
import photo from '../assets/images/zklogosinfondo.png'; // Ruta de la foto
// Importa la lista de pistas de audio

const AudioPlayer = ({ selectedTrackNumber }) => {
  const audioRef = useRef(null);
  const selectedTrack = tracks.find(track => track.number === selectedTrackNumber);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load(); // Reset the audio element
      audioRef.current.play();
    }
  }, [selectedTrackNumber]);

  if (!selectedTrack) {
    return (
      <div className='logo-container'>
        <img src={photo} alt="Zelako Koadrila 10 Aniversario"/>
      </div>
    );
  }
  return (
 
      <div className="audio-player-text">
        <h2>NUMERO: {selectedTrack.number}</h2>
        <p>TITULO</p>
        <h3>{selectedTrack.title}</h3>
        <audio ref={audioRef} controls>
          <source src={`/src/assets/songs/${selectedTrack.url}`} type="audio/mp3" />
          Tu navegador no soporta la etiqueta de audio.
        </audio>
        <p></p>
      </div>
    
  );
};
  
// Define las PropTypes
AudioPlayer.propTypes = {
  selectedTrackNumber: PropTypes.string.isRequired,
};
  
export default AudioPlayer;

// Referencia al elemento de audio: Usamos useRef para obtener una referencia directa al elemento de audio.
// Actualizar la pista de audio: En el useEffect, pausamos el audio actual, recargamos el elemento de audio con load(), y luego lo reproducimos con play() cuando selectedTrackNumber cambia.
// Pasar el número aleatorio: Aseguramos que NumberGenerator pasa el número aleatorio correcto a AudioPlayer.