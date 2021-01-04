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
  console.log('changes', changes);
  
  try {
    await Users.update(userId, changes); 
    const updated = await Users.getById(userId);
    res.status(200).json(updated);
  } catch (error)  {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/', async (req, res) => {
  const userId = req.decodedToken.subject;  
  try {
    await Users.remove(userId);
    res.status(200).json({ message: `user with id ${userId} was deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/issues', (req, res) => {

});

module.exports = router;
