// Paso 1 - Requiero materia prima
let visitados = require('../data/datosProductos');

// Paso 2 - Funcionalidad, trabajo la materia prima
let homeController = {

    leerTodos: function() {
        console.log('Leo productos desde data')
        return visitados
    }

}

// Paso 3 - Disponibilizo la materia prima
module.exports = homeController;