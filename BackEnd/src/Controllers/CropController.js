const connection = require('../DataBase/connection')
const crypto = require('crypto');


module.exports= {
    async create(req,res){
        const {name, start_date, finish_date} = req.body;

        const [count] = await connection('crop').count()
        res.header('countMaxQuantity',count['count(*)']);

        const culture_idVector = await connection('culture').select('id').where('id',1);
        const culture_id = culture_idVector[0].id;
        const user_id = req.headers.authorization;
        
        
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('crop').insert({
            id,
            name,
            start_date,
            finish_date,
            culture_id,
            user_id
        })
        return res.json({id,user_id});
    },

    async index(req,res){
        const crops = await connection('crop').select('*');
        return res.json(crops);
    },

    async delete(req,res){
        const {id} = req.params;
        const user_id = req.headers.authorization;
     
        const crop = await connection('crop').where('id',id)
        .select('user_id').first();

        console.log(crop.user_id, user_id);
        if(crop.user_id != user_id){
            return res.status(401).json({ error: 'Operation not permitted.'});
        }

        await connection('crop').where('id',id).delete();

        return res.status(204).send();
    }
}