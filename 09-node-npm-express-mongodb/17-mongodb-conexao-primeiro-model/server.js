const express = require('express');
const app = express(); // executa o express

const mongoose = require('mongoose');
const connectionString = '';
mongoose.connect(connectionString)
    .then(() => {
        console.log('Conectei à base de dados.');
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware');

app.use(express.urlencoded( { extended: true } ));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log("Server running on port 3000")
    });
});
