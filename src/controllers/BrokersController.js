
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

class BrokersController {

    list(req, res)
    {
        res.status(200).json(brokers);
    }

}

export default new BrokersController();