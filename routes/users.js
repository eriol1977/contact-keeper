const express = require('express');
const router = express.Router();

// @route   POST api/users
// @desc    Register a user
// @access  Public
// uses '/' because the '/api/users' path is already specified in server.js, in app.use
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;
