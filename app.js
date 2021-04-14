const express = require('express')
const app = express()

const port = process.env.PORT;

const path = require('path');
app.use(express.static('public'));

app.set('view engine', 'ejs');


// Puerto Express
// app.listen(port, () => {
//     console.log('Example app listening on port '+ port);
// })

// Puerto Heroku
app.listen(port || 3000, function() {
    console.log('Example app listening on port ' + port);    
})



// -------- Rutas -------- //
//Home
app.get('/', (req, res) => {
    res.render('home');
});

//Registro
app.get('/views/register.html', (req, res) => {
    res.render('register');
});

//Inicio de sesión
app.get('/views/login.html', (req, res) => {
    res.render('login');
});