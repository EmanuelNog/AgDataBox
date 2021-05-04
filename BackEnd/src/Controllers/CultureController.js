const { response } = require('express');
const connection = require('../DataBase/connection');

module.exports = { 

    async create(req,res){
        const {name} = req.body;

        await connection('culture').insert({
           name
        })

    return res.json({name});
    },

    async index(req,res){
        const cultures = await connection('culture').select('*');
        return res.json(cultures);
    }    
} 