const connection = require('../DataBase/connection')
const crypton = require('crypto')
const { create } = require('./SessionController');
const { index } = require('./CultureController');

module.exports = {
    async create(req,res){
        const{name,year} = req.body;
        const user_id = localStorage.getItem('userId');
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('machine').insert({
            id,
            name,
            year,
            user_id
        })

        return res.json({id})        
    },
    async index(req,res){
        const machines = await connection('machine').select('*');
        return res.json(machines);
    }
}