const router = require('express').Router();

const Users = require('./model');

router.get('/', async (_, res) => {
  try {
    const users = await Users.getAll();    
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.getById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: `no users with an id of ${id}` })
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/', async (req, res) => {
  const userId = req.decodedToken.subject;  
  const changes = req.body;  
  try {
    const edit = await Users.update(userId, changes);   
    res.status(200).json(edit);
  } catch (error)  {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/', async (req, res) => {
  const userId = req.decodedToken.subject;  
  try {
    const delUser = await Users.remove(userId);
    res.status(200).json(delUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/issues', (req, res) => {

});

module.exports = router;
