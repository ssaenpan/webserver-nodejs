const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');



// app.get('/', function(req, res) {
//     let salida = {
//         nombre: 'Sergio',
//         apellido: 'Saenz',
//         localidad: 'Chihuahua',
//         edad: '50 años'
//     };

//     res.send(salida);
// })


app.get('/', (req, res) => {
    //res.send('Hello Data')
    res.render('home', {
        nombre: 'sergio'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});