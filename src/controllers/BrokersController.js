const database = require('../models')

const brokers = [
    {
        id:1,
        "name":"Inter Bank"
    },
    {
        id:2,
        "name":"XP Bank"
    }
];

class BrokersController {

    static async list(req, res)
    {
        try
        {
            const dbBrokers = await database.Brokers.findAll();
            return res.status(200).json(dbBrokers);
        }
        catch(error)
        {
            return res.status(500).json(error.message)
        }
    }


    static async get(req, res)
    {
        try
        {
            let index = await database.Brokers.findAll({
                where: {id: req.params.id}
            })
            res.status(200).json(index);
        }
        catch(error)
        {
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res)
    {
        brokers.push(req.body);
        res.status(200).json(brokers);
    }

    static async edit(req, res)
    {
        let index = brokers.findIndex(broker => broker.id == req.params.id)
        brokers[index].name = req.body.name;
    
        res.status(200).send(brokers);
    }

    static async delete(req, res)
    {
        let index = brokers.findIndex(broker => broker.id == req.params.id)
    
        if (index >= 0) {
            brokers.splice(index, 1);
            res.status(200).json(brokers);
        } else {
            res.status(404).json({ message: 'ID não encontrado no array' });
        }
    }

}

module.exports = BrokersController;