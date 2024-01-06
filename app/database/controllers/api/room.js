const router = require('express').Router();
const { Room, Roommate, User } = require('../../models');
require('dotenv').config();



// update a listing
router.put('/room/:id', async (req, res) => {
    try {
        
        const roomData = await Room.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        res.status(200).json(roomData);

    } catch (error) {
        console.log(err);
        res.status(500).json(err)
    }
});



// delete a listing 
router.delete('/:id', async (req,res) => {
    try {
        
        const roomData = await Room.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(roomData);

    } catch (error) {
        console.log(err);
        res.status(500).json(err)
    }
});



module.exports = router; 
