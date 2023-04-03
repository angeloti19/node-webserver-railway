
const http = require('http');

http.createServer((request, response) =>{  //req es lo que esta solicitando en el sitio web, res es lo que responde al cliente
    
    response.writeHead(404);
    response.write('404')

    response.write('Hola mundo');
    response.end();

})

.listen(8080);  //Especifica el puerto en el cual quiero correr mi aplicacion


console.log('Escuchando al puerto', 8080);