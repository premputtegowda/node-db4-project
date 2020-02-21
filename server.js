const express = require('express')
const helmet = require('helmet');

const server = express();
const recipeRouter = require('./recipes/recipe-router.js')
server.use(helmet());



server.use(express.json());

server.use('/api/recipes', recipeRouter)

module.exports = server;
