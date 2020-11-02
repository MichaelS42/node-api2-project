const express = require('express');
const server = express();
const blogRouter = require('./blog-router.js')


server.use(express.json());
server.use('/api/blog', blogRouter)

server.get('/', (req, res) => {
    res.send(`
    <h2>Welcome2API</h2>
    `);
});



module.exports = server;