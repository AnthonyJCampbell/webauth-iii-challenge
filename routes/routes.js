const router = require('express').Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./models.js')

// No need to pre-pend '/api'
router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12)
  user.password = hash;
  
  Users.add(user)
  .then(savedUser => {
    console.log('made it here')
    res.status(201).json(savedUser)
  })
  .catch(error => {
      res.status(500).json(error)
    })
})

// router.post('/api/login')
router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          res.status(200).json({
            message: `Welcome ${user.username}`
          })
        } else {
          res.status(401).json({ message: "Your username or password are incorrect"})
        }
      })
      .catch(error => {
        res.status(500).json(error)
      })
})

// router.get('/api/users')


module.exports = router;

