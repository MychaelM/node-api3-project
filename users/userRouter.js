const express = require('express');
const users = require('./userDb');
const { checkUserId, validateUser } = require("./userMiddleware");

const router = express.Router();

router.post('/', validateUser(), (req, res) => {
  users.insert(req.body)
    .then((user) => {
      res.status(201).json(user)
    })
    .catch((err) => {
      console.log(err);
    })
});

router.post('/:id/posts', checkUserId(), (req, res) => {
  
});

router.get('/', (req, res) => {
  users.get()
  .then((users) => {
    res.status(200).json(users);
  })
  .catch((err) => {
    next(err)
    // console.log(err)
    // res.status(500).json({
    //   message: "Error retreiving users"
    // })
  })
});

router.get('/:id', checkUserId(), (req, res) => {
  res.status(200).json(req.user);
});

router.get("/:id/posts", checkUserId(), (req, res) => {
  users.getUserPosts(req.params.id)
    .then((posts) => {
      res.status(200).json(posts)
    })
    .catch((err) => {
      next(err)
    })
});

router.delete("/:id", checkUserId(), (req, res) => {
  // do your magic!
});

router.put("/:id", checkUserId(), (req, res) => {
  // do your magic!
});

//custom middleware

// function validateUserId(req, res, next) {
//   // do your magic!
// }

// function validateUser(req, res, next) {
//   if (!req.body) {
//     console.log(req.body);
//     res.status(400).json({
//       message: "Missing User Data",
//     });
//   } else if (!req.body.name) {
//     res.status(400).json({
//       message: "missing required name field",
//     });
//   }
//   next();
// }

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
