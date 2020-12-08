const express = require('express');
const userRoutes = require("./users/userRouter");
const postRoutes = require("./posts/postRouter");

const server = express();

server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use("/users", userRoutes)
server.use(postRoutes)

//custom middleware

function logger(req, res, next) {
  const time = new Date().toISOString();
  console.log(` [${time}] ${req.ip} ${req.method} ${req.url} `)

  next();
}

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: "Something went wrong, please try again later"
  })
})

// server.listen(8080, () => {
//   console.log(`Server listening at http://localhost:8080`);
// })
module.exports = server;
