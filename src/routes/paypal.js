const express = require (express)

const router = express.Router();

router.get('/create-order', (req, res) =>{
    res.send('Creando orden')

})

router.get('/capture-order', (req, res) =>{
    res.send('Capturando orden')

})

router.get('/cancel-order', (req, res) =>{
    res.send('Cancelando orden')

})



export default router; 