const router = require('express').Router();

router.use('/users', require('./user')); 
router.use('/profile', require('./profile'));
router.use('/transactions', require('./transaction')); 

module.exports = router; 