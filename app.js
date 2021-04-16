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

// ¿Dónde están los gerentes?
const homeRouter = require('./routes/homeRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

// Llamo al ruteo --> conecto con las rutas. App.use reemplaza al res.render
app.use('/', homeRouter);
// app.use('/', userRouter);
// app.use('/products', productRouter);

