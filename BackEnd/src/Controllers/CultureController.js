const { response } = require('express');
const connection = require('../DataBase/connection');

module.exports = { 

    async create(req,res){
        const {Name} = req.body;

        await connection('Culture').insert({
           Name
        })

    return res.json({Name});
    },

    async index(req,res){
        const cultures = await connection('Culture').select('*');
        return res.json(cultures);
    }    
} 