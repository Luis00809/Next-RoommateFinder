const router = require('express').Router();
const { User, Roommate, Room } = require('../models');


// get all users
router.get('/all', async (req, res) => {
    try {

        const userData = await User.findAll({
            include: 
            [{model: Room}, {model: Roommate}]
        })  

        // const userResult= userData.map((data) => data.get({ plain: true }));
        res.status(200).json(userData);
        

    } catch (err) {
        console.log(err)
        res.status(500).json(err)

    }
});


// get a user
router.get('/user/:id', async (req, res) => {
    try{
        const userData = await User.findByPk(req.params.id, {
            where: {
                id: req.params.id
            },
            include: [{ model: Room }, { model: Roommate }]
        });
        // const user = userData.get({ plain: true });
        res.status(200).json(userData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})


module.exports = router;
