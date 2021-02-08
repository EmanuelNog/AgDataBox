const connection = require('../database/connection');

module.exports = {
    async create(req,res) {
        const{id} = req.body;

        const ong = await connection('User')
        .where('id',id)
        .select('name')
        .first();

        if(!ongs){
            return res.status(400).json({error: 'No User found with this ID'});
        }
    return res.json(ong);
    }
}