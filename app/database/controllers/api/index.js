const router = require('express').Router();

const users = require('./user');
const rooms = require('./room');
const roommate = require('./roommate');
const dashboard = require('./dashboard');

router.use('/user', users);
router.use('/rooms', rooms);
router.use('/roommate', roommate);
router.use('/dashboard', dashboard);

module.exports = router; 
