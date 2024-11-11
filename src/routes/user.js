const express = require("express");
const User = require("../models/user"); // Importa el schema de usuario
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { generateRandomKey, vigenereEncrypt, vigenereDecrypt } = require('../utils/vigenere');


const router = express.Router();

// Ruta para crear un usuario
router.post('/users', async (req, res) => {
   try {
       const { nombres, apellidos, email, sexo, edad, password } = req.body;

       // Generar una clave de cifrado aleatoria
       

       // Crear una nueva instancia del modelo User con datos cifrados
       const newUser = new User({
           nombres,
           apellidos,
           email, // Almacena el correo electrónico cifrado
           sexo,
           edad,
           password, // Almacena la contraseña cifrada
       });

       // Guardar el nuevo usuario en la base de datos
       const data = await newUser.save();
       res.json(data);
   } catch (error) {
       res.json({ message: error.message });
   }
});

// Ruta para obtener todos los usuarios
router.get("/users", (req, res) => {
   User.find()
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

// Ruta para borrar usuarios de db

router.delete("/users", (req, res) =>{
   User.deleteMany()
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});



module.exports = router;
