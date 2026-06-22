const http = require('http');
const requestHandler=require('./user');
const server = http.createServer();

const PORT=3001;
server.listen(PORT,()=> {
    console.log('server running on address http://localhost:$ {PORT}');
})