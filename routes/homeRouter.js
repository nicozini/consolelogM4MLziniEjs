// Paso 1 - Requiero Express
const express = require('express');

// Paso 2 - Ejecuto ruteo de Express
const router = express.Router();

// Paso 3 - Requiero el controlador
const controladorHome = require('../controller/homeController');


// Paso 4 - Defino ruta, que voy a mostrar
router.get('/', (req,res) => {
    // Leo todo el array de products en el controlador homeController
    const products = controladorHome.leerTodos();
    // Envio el array a la vista para que la recorra EJS
    console.log('Volví del controlador');

    res.render('home', {products});
})

module.exports = router;