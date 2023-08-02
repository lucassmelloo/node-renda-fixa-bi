

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

    list(req, res)
    {
        res.status(200).json(brokers);
    }

    get(req, res)
    {
        let index = brokers.findIndex(broker => broker.id == req.params.id)
        res.status(200).json(brokers[index]);
    }

    create(req, res)
    {
        brokers.push(req.body);
        res.status(200).json(brokers);
    }

    edit(req, res)
    {
        let index = brokers.findIndex(broker => broker.id == req.params.id)
        brokers[index].name = req.body.name;
    
        res.status(200).send(brokers);
    }

    delete(req, res)
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

module.exports = new BrokersController();