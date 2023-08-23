import User from '../models/User.js';

const controller = {

    getUser: async (req, res) => {
        let queries = {}

        if(req.query.name){
            queries.name = new RegExp(`^${req.query.name}`, 'i')
        }

        if(req.query.email){
            queries.email = req.query.email
        }

        try {
            const user = await User.find(queries)

            if (user.length > 0) {
                return res.status(200).json({
                    succes: true,
                    user: user,
                    message: 'User get successfully'
                }) 
            }

            return res.status(404).json({
                succes: false,
                message: 'User not found'
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                succes: false,
                message: 'User get failed'
            })
        }
    },

    getUserById: async (req, res) => {
        try {
            const oneUser = await User.findById('64e10e2e7cab94c6e784620b')

            if (oneUser) {
                return res.status(200).json({
                    succes: true,
                    message: 'User search successfully',
                    user: oneUser,
                })
            }

            return res.status(404).json({
                succes: true,
                message: 'User search is not found',
            })
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                succes: falses,
                message: 'User creation failed'
            })
        }
    },

    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);

            return res.status(201).json({
                succes: true,
                message: 'User created successfully'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                succes: falses,
                message: 'User creation failed'
            })
        }
    },

    deleteUser: (req, res) => {
        res.send('ESTAMOS EN EL DELETE DE USER')
    },

    updateUser: (req, res) => {
        res.send('ESTAMOS EN EL PUT DE USER')
    },
}

export default controller;