const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.json());

const routes = require('./routes')
app.use('/api', routes);
app.use(express.static(path.join(__dirname, '../public')))

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});


//comandos curl
//curl -X POST http://localhost:3000/api/product -H "Content-Type: application/json" -d '{"id": 3, "name": "", "value": 0}'
//curl -X PUT http://localhost:3000/api/product/x -H "Content-Type: application/json" -d '{"name":"","value":0}'
//curl -X DELETE http://localhost:3000/api/product/x

//comandos curl
//curl -X POST http://localhost:3000/api/order -H "Content-Type: application/json" -d '{"id": 3, "name": "", "value": 0}'
//curl -X PUT http://localhost:3000/api/order/x -H "Content-Type: application/json" -d '{"name":"","value":0}'
//curl -X DELETE http://localhost:3000/api/order/x