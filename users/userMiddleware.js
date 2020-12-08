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

module.exports = {
  checkUserId,
}