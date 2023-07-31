import express from  'express';

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


router.get('/',(req,res)=>{
    res.status(200).json(brokers);
});

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
    brokers[index].title = 
    res.status(200).send(index);
});

export default router;