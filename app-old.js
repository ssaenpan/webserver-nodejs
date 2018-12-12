const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Sergio',
        apellido: 'Saenz',
        localidad: 'Chihuahua',
        edad: '50años'
    }

    res.write(JSON.stringify(salida));
    //res.write('Hola Mundo');
    res.end();
})

.listen(4200);

console.log('Escuchando desde el puerto 4200');