const server = require('./server.js');

const port = 4004;

server.listen(port, () => console.log(`server running on ${port}`))


module.exports = server;