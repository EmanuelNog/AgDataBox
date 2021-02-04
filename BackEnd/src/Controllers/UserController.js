const connection = require('../DataBase/connection')
const crypto = require('crypto')

module.exports = {

    async create(req,res){
        const {Name,Password} = req.body
        const ID = crypto.randomBytes(4).toString('HEX')

        await connection('User').insert({
            Name,
            Password,
            ID
        })

        return res.json({ID})
    },
    async index(req,res){
        const users = await connection('User').select('*');
        return res.json(users);
    }

}