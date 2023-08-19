import express from 'express';

const controller = {
    getUsers: (req, res) => {
        res.send('ESTAMOS EN EL GET DE CITIES')
    },

    createUsers: (req, res) => {
        res.send('ESTAMOS EN EL CREATE DE CITIES')
    },

    deleteUsers: (req, res) => {
        res.send('ESTAMOS EN EL DELETE DE CITIES')
    },

    updateUsers: (req, res) => {
        res.send('ESTAMOS EN EL PUT DE CITIES')
    },
}

export default controller;