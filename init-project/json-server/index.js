const jsonServer = require('json-server');

const server = jsonServer.create();

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);
server.use(nocache())