const {models} = require('../../database');
const {QueryTypes} = require('sequelize');

module.exports ={
    async index(req,res){

        const query = await models.users.findAll()
        res.json(query)
    },

    async get(req,res) {
        const {id} = req.params

        const query = await models.users.findAll({
            where:{id}
        })
        res.json(query);
    },

    async post(req,res){
        const { nome,sobre_nome,idade } = req.body;
        await models.users.create({
            nome,sobre_nome,idade           
        });
        res.json({})

    }
}