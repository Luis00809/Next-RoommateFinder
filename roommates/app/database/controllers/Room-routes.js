const router = require('express').Router();
const { Room, User, Roommate } = require('../models');

// get all rooms
router.get('/rooms', async (req, res) => {
    try {

        const roomData = await Room.findAll({include:[{ model: User }]});
        // const listingResult = roomData.map((data) => data.get({ plain: true }));

        res.status(200).json(roomData);
        

    } catch (err) {
        console.log(err);
    }
});


// get a listing by id
router.get('/rooms/:id', async (req, res) => {
    try {
        const roomData = await Room.findByPk(req.params.id, {
            where: {
                id: req.params.id
            },
            include:[{ model: User }]
        });

        // const room = roomData.get({ plain: true });
        res.status(200).json(roomData);
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});


module.exports = router; 
