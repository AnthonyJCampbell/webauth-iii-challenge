const router = require('express').Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./models.js')

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
// router.post('/api/register')

// router.post('/api/login')

// router.get('/api/users')


module.exports = router;

