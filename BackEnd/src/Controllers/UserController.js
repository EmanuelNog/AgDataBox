const connection = require('../DataBase/connection')
const crypto = require('crypto')

module.exports = {

    async create(req,res){
        const {name,password} = req.body
        //console.log(Name,Password)
        const id = crypto.randomBytes(4).toString('HEX')

        await connection('user').insert({
            id,
            name,
            password
        })

        return res.json({id})
    },
    async index(req,res){
        const users = await connection('user').select('*');
        return res.json(users);
    }
}