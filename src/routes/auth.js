const express = require ("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(`Email recibido: ${email}`);
        console.log(`Contraseña recibida: ${password}`);
        const user = await User.findOne({email});
        console.log(`Correo para comprobar: ${user}`);
        if (!user){
            return res.status(400).json({ message: "Usuario no encontrado"});
        }

        console.log(`Contraseña a evaluar: ${user.password}`)


        if(password !== user.password){
            return res.status(400).json({ message: "Contraseña incorrecta"});
        }

        const token = jwt.sign({id: user._id}, "tu_secreto_jwt", { expiresIn: '1'});

        res.json({token});
    
    }catch (error) {
        res.status(500),json({ message: error.message});

    }
});
module.exports = router; 