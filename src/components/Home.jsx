import { useNavigate } from 'react-router-dom';
import '../App.css';
import photo from '../assets/images/zklogosinfondo.png';  // Ajusta la ruta según la ubicación del archivo

const Home = () => {
    const navigate = useNavigate();

  const handleStart = () => {
    navigate('/game');
  };

  return (
    <div className='welcome-container'>
        <div className="welcome-img" >
            <img src={photo} alt="Zelako Koadrila 10 Aniversario" />
        </div>
        <div className="welcome-text">
            <h1>Bingo-Music</h1>
            <p>¡A jugar con Zelako Koadrila 10 Aniversario!</p>
            <button onClick={handleStart}>Comenzar Juego</button>
        </div>
    </div>

  );
};

export default Home;
