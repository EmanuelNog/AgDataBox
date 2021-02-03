const connection = require('../DataBase/connection')
const crypto = require('crypto');


module.exports= {
    async index(req,res){
        const crops = await connection('Crop').select('*');
        return res.json(crops);
    },

    async create(req,res){
        const {Name, StartDate, FinishDate} = req.body;
        
        const culture_idVector = await connection('Culture').select('ID').where('ID',1);
        const culture_id = culture_idVector[0].ID;
        
        const ID = crypto.randomBytes(4).toString('HEX');

        await connection('Crop').insert({
            ID,
            Name,
            StartDate,
            FinishDate,
            culture_id
        })
        return res.json({ID});
    }
}