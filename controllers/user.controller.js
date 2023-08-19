import express from 'express';
import Users from '../models/Users.js';

const controller = {
    getUsers: async (req, res) => {

        let queries = {}

        if(req.query.name){
            queries.name = req.query.name
        }

        try {
            const users = await Users.find(queries);
    
            return res.status(200).json({
                succes: true,
                users: users,
                message: 'User get successfully'
            })
        } catch (error) {
            return res.status(500).json({
                succes: false,
                message: 'User get failed'
            })
        }
    },

    createUsers: async (req, res) => {
        try {
            const newUser = await Users.create();
    
            return res.status(201).json({
                succes: true,
                message: 'User created successfully'
            })
        } catch (error) {
            return res.status(500).json({
                succes: falses,
                message: 'User creation failed'
            })
        }
    },

    deleteUsers: (req, res) => {
        res.send('ESTAMOS EN EL DELETE DE USERS')
    },

    updateUsers: (req, res) => {
        res.send('ESTAMOS EN EL PUT DE USERS')
    },
}

export default controller;