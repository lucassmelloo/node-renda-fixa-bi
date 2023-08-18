const { Brokers } = require('../models')

class BrokersController {

    static async list(req, res)
    {
        try
        {
            const brokers = await Brokers.findAll();
            return res.status(200).json(brokers);
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
            let broker = await Brokers.findByPk( req.params.id);
            if(broker !== null)
            {
                broker.name = req.body.name;
                broker.save();
                res.status(200).json(broker);
            }
            else
            {
                res.status(404).json({ message: 'Broker not found' });
            }
        }
        catch(error)
        {
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res)
    {
        try
        {
            let broker = await Brokers.create({
                name: req.body.name
            });

            await broker.save();

            res.status(200).json(broker);
        }
        catch(error)
        {
            return res.status(500).json(error.message)
        }
    }

    static async edit(req, res)
    {
        try
        {
            let broker = await Brokers.findByPk(req.params.id)
            if(broker !== null)
            {
                broker.name = req.body.name;
                broker.save();
                res.status(200).send(broker);
            }
            else 
            {
                res.status(404).json({ message: 'Broker not found' });
            }
        }
        catch(error)
        {
            res.status(500).json(error.message);
        }
    
    }

    static async delete(req, res)
    {
        try
        {
            let index = await Brokers.findByPk( req.params.id);

            if (index != null) 
            {
                await index.destroy();
                res.status(200).json(index);
            } 
            else 
            {
                res.status(404).json({ message: 'Broker not found' });
            }
        }
        catch(error)
        {
            res.status(500).json(error.message);
        }
    
    }

}

module.exports = BrokersController;