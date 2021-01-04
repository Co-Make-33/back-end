const router = require('express').Router();

const { regBody, hashPass, unique } = require ('../middleware/register.js');
const { logBody, validUser, validPass, makeToken } = require('../middleware/login');

const Users = require('../users/model');

router.post('/register', regBody, unique, hashPass, async (req, res) => {
  try {
    const newUser = await Users.add(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/login',logBody, validUser, validPass, (req, res) => {
  const token = makeToken(req.userData);
  res.status(200).json({ message:`Welcome, ${req.userData.username}`, token });
});

module.exports = router;
 