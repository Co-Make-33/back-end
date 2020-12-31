const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const authRouter = require('./auth/router');
const usersRouter = require('./users/router');
const issuesRouter = require('./issues/router');

const server = express();

server.use(helmet());
server.use(morgan());
server.use(express.json());
server.use(cors());

server.use('/api/issues', issuesRouter);
server.use('/api/users', usersRouter);
server.use('/api', authRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

module.exports = server;
