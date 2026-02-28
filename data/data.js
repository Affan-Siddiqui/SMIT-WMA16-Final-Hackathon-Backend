
const express = require('express');
const router = express.Router();

let data = [
    {
        id : 1,
        name : 'ali',
        age : 15,
    },
    {
        id : 2,
        name : 'adeel',
        age : 13
    },
    {
        id : 3,
        name : 'rehab',
        age : 15,
    }
]

router.get('/', (req, res) => {
    res.json(data);
})


router.post('/', (req,res) => { 
    console.log(req.body);
    const {id, name, age} = req.body;

    data.push({
        id,
        name,
        age
    });

    res.json(data);
});

router.put('/:id', (req,res) => { 
    const id = req.params.id;
    const {name, age} = req.body;

    const dataval = data.find( d => d.id === id );

    dataval.name = name;
    dataval.age = age;

    res.json(data);
});

router.patch('/:id', (req, res) => { 
    const id = req.params.id;
    const updates = req.body;

    let dataIndex = data.find( d => d.id == id);

    Object.assign(dataIndex, updates);

    res.json(data);
})



module.exports = router;