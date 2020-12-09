const users = require("./userDb");

function checkUserId () {
  return (req, res, next) => {
    users.getById(req.params.id)
      .then((user) => {
        if(user) {
        req.user = user;
        next();
        } else {
          res.status(404).json({
            message: "User not found"
          })
        }
      })
      .catch((err) => {
        next(err)
      })
  }
}

function validateUser () {
  return (req, res, next) => {
    if (!req.body) {
      console.log(req.body)
      res.status(400).json({
        message: "Missing User Data"
      })
    } else if (!req.body.name) {
      res.status(400).json({
        message: "missing required name field",
      });
    }
    next();
  }
}

module.exports = {
  checkUserId,
  validateUser,
}