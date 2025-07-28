const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Apply the auth middleware to all store routes
router.use(auth);

// Placeholder for store routes
router.get('/', (req, res) => {
  res.send('Store routes');
});

module.exports = router;
