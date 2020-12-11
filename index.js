const express = require('express');

const server = require('./server');
const port = process.env.PORT || 8080

server.listen(port, () => {
  console.log(`Server listening at http://localhost:8080`);
});
