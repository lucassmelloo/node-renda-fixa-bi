import express from  'express';
import BrokerController from '../controllers/BrokersController.js'

const router = express.Router();

const brokers = [
    {
        id:1,
        "title":"Inter Bank"
    },
    {
        id:2,
        "title":"XP Bank"
    }
];

router.get('/', BrokerController.list);

router.get('/:id', (req, res)=>{
    let index = brokers.findIndex(broker => broker.id == req.params.id)
    res.status(200).json(brokers[index]);
});

router.post('/',(req,res)=>{
    brokers.push(req.body);
    res.status(200).json(brokers);
});

router.put('/:id',(req,res)=>{
    let index = brokers.findIndex(broker => broker.id == req.params.id)
    brokers[index].title = req.body.title;

    res.status(200).send(brokers);
});

router.delete('/:id',(req,res)=>{
    let index = brokers.findIndex(broker => broker.id == req.params.id)

    if (index >= 0) {
        brokers.splice(index, 1);
        res.status(200).json(brokers); // Retorna o array atualizado após a remoção
    } else {
        res.status(404).json({ message: 'ID não encontrado no array' });
    }
});

export default router;
