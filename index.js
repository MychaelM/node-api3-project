const express = require('express');

const server = require('./server');

server.use(express.json())

server.listen(8080, () => {
  console.log(`Server listening at http://localhost:8080`);
});
