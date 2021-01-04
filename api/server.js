const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const restrict = require('./middleware/restricted');

const authRouter = require('./auth/router');
const usersRouter = require('./users/router');
const issuesRouter = require('./issues/router');

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());
server.use(cors());

server.use('/api/issues', restrict, issuesRouter);
server.use('/api/users', restrict, usersRouter);
server.use('/api', authRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

module.exports = server;
