const bcrypt = require('bcryptjs');
const Users = require('../users/model');

const regBody = (req, res, next) => {
  if (!req.body.password || !req.body.username || !req.body.email) {
     res.status(401).json({ message: 'username, email, and password required' });
  } else {
    next();
  }
};

const unique = async (req, res, next) => {
  try {
    const rowsUsername = await Users.getBy({ username: req.body.username });
    const rowsEmail = await Users.getBy({ email: req.body.email });    
    if (!rowsUsername.length || !rowsEmail.length){
      next()
    } else {
      res.status(401).json({message: 'Username or email already in use'})
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const hashPass = (req, res, next) => {
  try {
    const rounds = process.env.BCRYPT_ROUNDS || 7;
    const hash = bcrypt.hashSync(req.body.password, parseInt(rounds));
    req.body.password = hash;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

module.exports = {
  regBody,
  hashPass,
  unique
}
