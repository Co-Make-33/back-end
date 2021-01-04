const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Users = require('../users/model');
const { jwtSecret } = require('../../config/secrets');


const logBody = (req, res, next) => {
  const email = req.body.email;
  const username = req.body.username;
  if((!!username && !!email) || (!username && !email)) {
    res.status(401).json({ message: 'Email OR Username required' });
  } else if (!req.body.password) {
    res.status(401).json({ message: 'Password required' });
  } else {
    next();
  }
}

const validUser = async (req, res, next) => {
  const email = req.body.email;
  const username = req.body.username;
  try {
    const rows = await Users.getBy(email ? { email } : { username });
    if (!rows.length) {
      res.status(401).json({ message: 'invalid credentials' });
    } else {
      req.userData = rows[0];
      next();
    }
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
}

const validPass = (req, res, next) => {
  try {    
    const verify = bcrypt.compareSync(req.body.password, req.userData.password); 
    if (verify) {
      next();
    } else {
      res.status(401).json({ message: 'invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const makeToken = (user) => {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: '1h',
  };
  return jwt.sign(payload, jwtSecret, options);
};

module.exports = {
  logBody,
  validUser,
  validPass,
  makeToken
}
