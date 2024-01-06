const router = require('express').Router();

const userRoutes = require('./User-routes');
const roomRoutes = require('./Room-routes');
const rommateRoutes = require('./Roomate-routes');
const apiRoutes = require('./api');

router.use('/user', userRoutes);
router.use('/listing', roomRoutes);
router.use('/roommates', rommateRoutes);
router.use('/api', apiRoutes);

// router.use((req, res) => {
//     res.sendFile(path.join(__dirname, '../../client/build/index.html'));
//   });

module.exports = router; 

// need to adjust router