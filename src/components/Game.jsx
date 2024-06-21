import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import TableNumbers from './TableNumbers';
import AudioPlayer from './AudioPlayer';
import Modal from 'react-modal';

// Establece el elemento raíz del modal para accesibilidad
Modal.setAppElement('#root');

const Game = () => {
    const [randomNumber, setRandomNumber] = useState('0');
    const [calledNumbers, setCalledNumbers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal
    const navigate = useNavigate(); 
    const MAX_NUMBER = 90;

    const generateRandomNumber = () => {
        let newNumber;
        do {
            newNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
        } while (calledNumbers.includes(newNumber)); // Repite el proceso si el número ya está en la lista
        return newNumber;
    };

    const handleGenerateNumber = () => {
        if (calledNumbers.length < MAX_NUMBER) { // Verifica si se han llamado menos de 90 números
            const newNumber = generateRandomNumber();
            setRandomNumber(newNumber.toString());
            setCalledNumbers([...calledNumbers, newNumber]); // Agregar el nuevo número a la lista
        } else {
            console.log("All numbers have been called, opening modal.");
            setIsModalOpen(true); // Abre el modal cuando se hayan llamado los 90 números
        }
    };

    const handleNewGame = () => {
        console.log("Starting a new game.");
        setRandomNumber('0');
        setCalledNumbers([]);
        setIsModalOpen(false); // Cierra el modal si está abierto
    };

    const handleCloseModal = () => {
        console.log("Closing modal and redirecting to home.");
        setIsModalOpen(false); // Cierra el modal
        navigate('/'); // Redirige a la página principal
    };

    return (
        <div className="app-container">
            <TableNumbers calledNumbers={calledNumbers} />
            <div className="number-container">
                <div className="number-buttons">
                    <button className="number-button" onClick={handleNewGame}>
                        Nueva partida
                    </button>
                </div>
                <div className="number-box">
                    <p>{randomNumber}</p>
                </div>
                <div className="number-buttons">
                    <button className="number-button" onClick={handleGenerateNumber}>
                        Nuevo número
                    </button>
                </div>
            </div>
            <div className="audio-player-container">
                {isModalOpen ? (
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={() => setIsModalOpen(false)}
                        contentLabel="Partida Finalizada"
                        className="modal"
                        overlayClassName="modal-overlay"
                    >
                        <div className="modal-content">
                            <h2>Partida Finalizada</h2>
                            <p>¿Quieres jugar otra vez?</p>
                            <div className="modal-buttons">
                                <button onClick={handleNewGame}>Sí</button>
                                <button onClick={handleCloseModal}>No</button>
                            </div>
                        </div>
                    </Modal>
                ) : (
                    <AudioPlayer selectedTrackNumber={randomNumber} />
                )}
            </div>
        </div>
    );
};

export default Game;




