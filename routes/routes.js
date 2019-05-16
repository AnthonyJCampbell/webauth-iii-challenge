const router = require('express').Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./models.js')
const restricted = require('./restricted-middleware')

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

function makeToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department
  };
  const options = {
    expiresIn: '1h'
  };
  const token = jwt.sign(payload, 'SECRET!', options)
  return token
}

// router.post('/api/login')
router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = makeToken(user)
          res.status(200).json({
            message: `Welcome ${user.username}`,
            token
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
router.get('/users', restricted, (req, res) => {
  const department = req.decodedToken.department;
  if (department.includes('HR')) {
    Users.find()
      .then(users => {
        res.json(users)
      })
      .catch(err => res.send(err))
  } else {
    res.json('Sorry you need to be god!')
  }
})


module.exports = router;

