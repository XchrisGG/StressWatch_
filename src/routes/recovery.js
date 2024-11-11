const express = require ("express");
const User = require("../models/user");
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'santiagocarreon0208@gmail.com',
        pass: 'cartelero'
    }
});

router.post('/sendEmail', (req, res) => {
    const { email } = req.body;

    const mailOptions = {
        from: 'santiagocarreon0208@gmail.com',
        to: email,
        subject: 'Recuperación de contraseña',
        text: 'Este es el correo de recuperación de contraseña.'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);  // Agregado para ver el error completo

            return res.status(500).send({ success: false, message: 'Error al enviar el correo' });
        }
        res.status(200).send({ success: true, message: 'Correo enviado' });
    });
});

module.exports = router;