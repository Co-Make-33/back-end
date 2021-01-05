const router = require('express').Router();

const Issues = require('./model');
const { issuesBody, changeBody, confirmUser } = require('../middleware/issues');

router.get('/', async (req, res) => {
  try {
    const issues = await Issues.getAll();
    if (issues.length) {
      res.status(200).json(issues);
    } else {
      res.status(401).json({ message: 'Currently no issues exist' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try{
    const issue = await Issues.getById(id);
    if (issue) {
      res.status(200).json(issue);
    } else {
      res.status(401).json({ message: `There is no issue with id ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/',issuesBody, async (req, res) => {
  const issue = req.body;
  req.body.user_id = req.decodedToken.subject
  try {
    const newIssue = await Issues.add(issue);
    res.status(201).json(newIssue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id',changeBody, confirmUser, async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  try {
    await Issues.update(id, changes);
    const updated = await Issues.getById(id);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', (req, res) => {

});

router.post('/vote', (req, res) => {

});

router.post('/comment', (req, res) => {
//(201)
});

module.exports = router;
