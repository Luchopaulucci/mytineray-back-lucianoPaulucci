import Cities from '../models/Citie.js';

const controller = {

    getCities: async (req, res) => {
        let queries = {}

        if(req.query.citie){
            queries.citie = new RegExp(`^${req.query.citie}`, 'i')
        }

        if(req.query.country){
            queries.country = req.query.country
        }

        try {
            const cities = await Cities.find(queries).populate('created_By')

            if (cities.length > 0) {
                return res.status(200).json({
                    succes: true,
                    cities: cities,
                    message: 'Cities get successfully'
                }) 
            }

            return res.status(404).json({
                succes: false,
                message: 'Cities not found'
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                succes: false,
                message: 'Cities get failed'
            })
        }
    },

    getCitiesById: async (req, res) => {
        try {
            const oneCities = await Cities.findById('')

            if (oneCities) {
                return res.status(200).json({
                    succes: true,
                    message: 'Citie search successfully',
                    cities: oneCities,
                })
            }

            return res.status(404).json({
                succes: true,
                message: 'Citie search is not found',
            })
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                succes: false,
                message: 'Citie creation failed'
            })
        }
    },

    createCities: async (req, res) => {
        try {
            const newCitie = await Cities.create(req.body);
            
            return res.status(201).json({
                succes: true,
                message: 'Cities created successfully'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                succes: false,
                message: 'Cities creation failed'
            })
        }
    },

    deleteCities: (req, res) => {
        res.send('ESTAMOS EN EL DELETE DE CITIES')
    },

    updateCities: (req, res) => {
        res.send('ESTAMOS EN EL PUT DE CITIES')
    },
}

export default controller;