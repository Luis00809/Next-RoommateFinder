const router = require('express').Router();
const { Room, Roommate, User } = require('../../models');


// update a form
router.put('/:id', async (req, res) => {
    try {
        
        const roommateData = await Roommate.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json(roommateData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});


// delete a form
router.delete('/:id', async (req, res) => {
    try {
        
        const roommateData = await Roommate.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json(roommateData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})


module.exports = router; 
