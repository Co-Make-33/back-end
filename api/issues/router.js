const router = require('express').Router();

const Issues = require('./model');
const Comments = require('../actions/comments-model');
const Votes = require('../actions/votes-model');
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

router.delete('/:id', confirmUser, async (req, res) => {
  const { id } = req.params;
  try {
    await Issues.remove(id)
    res.status(200).json({ message: `issue with id ${id} has been deleted` })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id/votes', async (req, res) => {
  const { id } = req.params;
  try {
    const votes = await Votes.getIssueVotes(id)
    if (votes[0].id === null) {
      res.status(401).json({ message: `no votes` })
    } else {
      res.status(200).json(votes);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

router.post('/:id/votes', async (req, res) => {
  const vote = req.body;
  req.body.user_id = req.decodedToken.subject
  req.body.issue_id = parseInt(req.params.id);
  try {
    const result = Votes.upsert(vote)
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id/comments', async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comments.getIssueComments(id)
    console.log('comment', comment);
    
    if (!comment) {
      res.status(401).json({ message: `no comments` })
    } else {
      res.status(200).json(comment);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

router.post('/:id/comments', async (req, res) => {
  const comment = req.body;
  req.body.user_id = req.decodedToken.subject
  req.body.issue_id = parseInt(req.params.id);
  try {
    const result = await Comments.addComment(comment)
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
