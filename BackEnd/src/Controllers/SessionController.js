const connection = require('../database/connection');

module.exports = {
    async create(req,res) {
        const{id} = req.body;

        const user = await connection('user')
        .where('id',id)
        .select('name')
        .first();

        if(!user){
            return res.status(400).json({error: 'No User found with this data'});
        }
    return res.json(user);
    }
}