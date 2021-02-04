const connection = require('../DataBase/connection')
const crypto = require('crypto');


module.exports= {

    async create(req,res){
        const {Name, StartDate, FinishDate} = req.body;

        const culture_idVector = await connection('Culture').select('ID').where('ID',1);
        const culture_ID = culture_idVector[0].ID;
        const user_ID = req.headers.authorization;
        
        
        const ID = crypto.randomBytes(4).toString('HEX');

        await connection('Crop').insert({
            ID,
            Name,
            StartDate,
            FinishDate,
            culture_ID,
            user_ID
        })
        return res.json({ID,user_ID});
    },

    async index(req,res){
        const crops = await connection('Crop').select('*');
        return res.json(crops);
    },


    async delete(req,res){
        const {ID} = req.params;
        const user_ID = req.headers.authorization;

        const crop = await connection('Crop').where('ID',ID)
        .select('user_ID').first();

        if(crop.user_ID != user_ID){
            return res.status(401).json({ error: 'Operation not permitted.'});
        }

        await connection('Crop').where('ID',ID).delete();

        return res.status(204).send();
    }
}