import React, { useState } from 'react';
import "../styles/Register.css";
import axios from 'axios';
//import { generateRandomKey, vigenereEncrypt } from "../../utils/vigenere.js";
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

function Register() {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [sexo, setSexo] = useState('');
    const [edad, setEdad] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate(); // Inicializa el hook useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('formulario enviado');

       // const key = generateRandomKey(10);
        //const encryptedEmail = vigenereEncrypt(email, key);
        //const encryptedPassword = vigenereEncrypt(password, key);

        try {
            const response = await axios.post('http://localhost:9000/api/users', {
                nombres,
                apellidos, 
                email,
                sexo, 
                edad,   
                password,
                
            });
            console.log('Respuesta de la API:', response);
            setSuccess('Usuario registrado con éxito');
            setNombres('');
            setApellidos('');
            setEmail('');
            setSexo('');
            setEdad('');
            setPassword('');
            
            // Redirige a la ruta /login
            navigate('/login');
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError('Error al registrar usuario');
            }
        }
    };

    return (
        <div className="form-register">
            <form onSubmit={handleSubmit}> 
                <h1>Crear nueva cuenta</h1>
                <div className="input-register">
                    <input
                        type="text"
                        placeholder="Nombres"
                        value={nombres}
                        onChange={(e) => setNombres(e.target.value)}
                        required
                    />
                </div>
                <div className="input-register">
                    <input
                        type="text"
                        placeholder="Ingrese Apellidos"
                        value={apellidos}
                        onChange={(e) => setApellidos(e.target.value)}
                        required
                    />
                </div>
                <div className="input-register">
                    <input
                        type="text"
                        placeholder="Ingresa correo electronico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-register">
                    <input
                        type="text"
                        placeholder="Ingresa tu sexo"
                        value={sexo}
                        onChange={(e) => setSexo(e.target.value)}
                        required
                    />
                </div>
                <div className="input-register">
                    <input
                        type="number"
                        placeholder="Ingresa tu edad"
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                        required
                    />
                </div>
                <div className="input-register">
                    <input
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>            
                <button type="submit">Crear cuenta</button>
                {success && <p className="success-message">{success}</p>}
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
}

export default Register;
