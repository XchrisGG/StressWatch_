import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import '../styles/modals.css';
import { FaUser, FaLock } from "react-icons/fa";
import axios from 'axios';
import Modal from 'react-modal';
import logo from '../Assets/Watch.png';
import logoR from '../Assets/reloj.png';
import logoA from '../Assets/celular.png';

Modal.setAppElement('#root');

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
    const [isStressWatchModalOpen, setIsStressWatchModalOpen] = useState(false);
    const [isPoliticsOpenModal, setIsPoliticsOpenModal] = useState(false);
    const [isPasswordRecOpenModal, setIsPasswordRecOpenModal] = useState(false);
    const navigate = useNavigate();

    const openModal = (message) => {
        setError(message);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    }

    
    const openPasswordModol = () => setIsPasswordRecOpenModal(true);
    const closePasswordModal = () => setIsPasswordRecOpenModal(false);

    const openDownloadModal = () => setIsDownloadModalOpen(true);
    const closeDownloadModal = () => setIsDownloadModalOpen(false);

    const openStressWatchModal = () => setIsStressWatchModalOpen(true);
    const closeStressWatchModal = () => setIsStressWatchModalOpen(false);

    const openPoliticsModal = () => setIsPoliticsOpenModal(true);
    const closePoliticsModal = () => setIsPoliticsOpenModal(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('formulario enviado');
        try {
            const response = await axios.post('http://localhost:9000/api/login', { 
                email, 
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Token', response.data.token);
            localStorage.setItem('token', response.data.token);
            console.log('Bienvenido');

            navigate('/menu');

        } catch (err) {
            openModal(err.response?.data?.message || 'error desconocido');
        }
    };
    const handlePasswordRecovery = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/api/sendEmail', { email }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            closePasswordModal();
            openModal('Correo de recuperación enviado con éxito');
        } catch (err) {
            openModal(err.response?.data?.message || 'Error al enviar el correo de rasdasdasecuperaciódsdasdsn');
        }
    };

    return (
        <div className='container'>
            <div className='content-container'>
                <div className='wrapperImg'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='wrapper'>
                    <form onSubmit={handleSubmit}>
                        <h1>Iniciar Sesión</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder='Correo electrónico'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder='Ingresa contraseña'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FaLock className='icon' />
                        </div>
                        <div className='remember-forgot'>
                            <label><input type="checkbox" />Recordar contraseña</label>
                            <a onClick={openPasswordModol}>¿Olvidaste tu contraseña?</a>
                        </div>
                        <button type="submit">Ingresar</button>
                        <div className="register-link">
                            <p>¿No tienes una cuenta? <Link to="/Register">Crear cuenta</Link></p>
                        </div>
                    </form>

                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        contentLabel="Error Modal"
                        className="modal-content"
                        overlayClassName="modal-overlay"
                    >
                        <div className="modal-header">
                            <h2>Error</h2>
                        </div>
                        <div className="modal-body">
                            <div>{error}</div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={closeModal}>Cerrar</button>
                        </div>
                    </Modal>
                </div>
            </div>

            <nav className='nav'>
                <ul>
                    <li onClick={openDownloadModal}><a>Descarga la App de StressWatch</a></li>
                    <li onClick={openStressWatchModal}><a>StressWatch</a></li>
                    <li onClick={openPoliticsModal}><a>Políticas de privacidad</a></li>
                </ul>
            </nav>

            <Modal
                isOpen={isDownloadModalOpen}
                onRequestClose={closeDownloadModal}
                contentLabel='Descarga la app'
                className='modal-content'
                overlayClassName='modal-overlay'
            >
                <button
                    className='modal-close-button'
                    onClick={closeDownloadModal}
                    aria-label='Close Modal'
                >
                    &times; {/* El símbolo de cierre "×" */}
                </button>
                <div>
                    <h2>Próximamente Disponible</h2>
                    <img src={logoA} className='modalImg' alt="Descarga la app" />
                </div>
            </Modal>

            <Modal
                isOpen={isStressWatchModalOpen}
                onRequestClose={closeStressWatchModal}
                contentLabel='Banda de seguimiento'
                className='modal-content'
                overlayClassName='modal-overlay'
            >
                <button
                    className='modal-close-button'
                    onClick={closeStressWatchModal}
                    aria-label='Close Modal'
                >
                    &times; {/* El símbolo de cierre "×" */}
                </button>
                <div>
                    <h2>Próximamente banda de seguimiento</h2>
                    <img src={logoR} className='modalImg' alt="Banda de seguimiento" />
                </div>
            </Modal>


            <Modal
    isOpen={isPasswordRecOpenModal}
    onRequestClose={closePasswordModal}
    contentLabel='recuperar contraseña'
    overlayClassName='modal-overaly'
>
    <div className='modal-content'>
        <form onSubmit={handlePasswordRecovery}>
            <input
                type="text"
                placeholder='Ingresa correo electrónico para enviar un correo'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type='submit'>Enviar correo electrónico</button>
        </form>
    </div>
</Modal>
      
              
          
            <Modal
                isOpen={isPoliticsOpenModal}
                onRequestClose={closePoliticsModal}
                contentLabel='Políticas de Privacidad'
                className='modal-content'
                overlayClassName='modal-overlay'
            >
                <button
                    className='modal-close-button'
                    onClick={closePoliticsModal}
                    aria-label='Close Modal'
                >
                    &times; {/* El símbolo de cierre "×" */}
                </button>
                <div className="modal-header">
                    <h2>Aviso de Privacidad</h2>
                </div>
                <div className="modal-body">
                    En StressWatch, tu privacidad es fundamental para nosotros. Este aviso de privacidad detalla cómo recopilamos, utilizamos, y protegemos tus datos personales para garantizar una experiencia segura y personalizada.
                    <h3>1. Información que Recopilamos:</h3>
                    <p>Recopilamos datos personales relacionados con tu salud y bienestar, incluyendo:</p>
                    <ul>
                        <li>Frecuencia Cardíaca</li>
                        <li>Conductancia de la Piel</li>
                        <li>Acelerómetro</li>
                    </ul>
                    <h3>2. Uso de Datos:</h3>
                    <p>Los datos que recopilamos se utilizan para:</p>
                    <ul>
                        <li>Proporcionar análisis y recomendaciones personalizadas para mejorar tu bienestar.</li>
                        <li>Monitorear y evaluar tus niveles de estrés, sueño, y actividad física.</li>
                        <li>Mejorar nuestros servicios y desarrollar nuevas funcionalidades basadas en el feedback de los usuarios.</li>
                    </ul>
                    <h3>3. Protección de Datos:</h3>
                    <p>Implementamos medidas de seguridad avanzadas para proteger tus datos personales contra accesos no autorizados...</p>
                    {/* Continúa con el resto del aviso */}
                </div>
            </Modal>
        </div>
    );
}

export default Login;
