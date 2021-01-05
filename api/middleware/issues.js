const Issues = require('../issues/model');

const issuesBody = (req, res, next) => {
  if (!req.body.title || !req.body.description) {
    res.status(401).json({ message: 'provide a title and description' });
  } else {
    next();
  }
}

const changeBody = (req, res, next) => {
  if (!req.body) {
    res.status(401).json({ message: 'provide changes to be made' });
  } else {
    next();
  }
}

const confirmUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const issue = await Issues.getById(id);
    if (req.decodedToken.subject === issue.user_id){
      next();
    } else {
      res.status(403).json({ message: 'You do not have permission to edit this issue' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  issuesBody,
  changeBody,
  confirmUser
}
