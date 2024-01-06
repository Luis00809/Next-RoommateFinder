const router = require('express').Router();
const { Room, Roommate, User } = require('../../models');

// create a user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

// login
// router.post('/login', async (req,res) => {
//     try {
        
//         const userData = await User.findOne({ where: { email: req.body.email } });

//         if (!userData) {
//             res.status(400).json({ message: 'Incorrect credintials, please try again' });
//             return;
//         };

//         const validPassword = await userData.checkPassword(req.body.password);

//         if (!validPassword) {
//             res.status(400).json({ message: 'Incorrect credintials, please try again' });
//             return;
//         };


//     } catch (error) {
//         console.log(error);
//         res.status(500).json(error)
//     }
// })

// update a user
router.put('/:id', async(req,res) => {
    try {
        const userData = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(userData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});


// delete a user
router.delete('/:id', async (req, res) => {
    try {
        
        const userData = await User.destroy({ where: {id: req.params.id }})
        res.status(200).json(userData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router; 
