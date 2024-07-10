const router = require('express').Router();
const User = require('../models/user.model');

// Route to get all users
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Route to add a new user
router.route('/add').post((req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Route to add a saved location for a user
router.route('/add-location').post((req, res) => {
  const { username, locationName, temperature, weather } = req.body;
  User.findOne({ username })
    .then(user => {
      if (!user) {
        return res.status(404).json('User not found');
      }
      const newLocation = { locationName, temperature, weather };
      user.savedLocations.push(newLocation);
      user.save()
        .then(() => res.json('Location added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
