var router = require('express').Router();
var db = require('../../conf/db');

module.exports = router;



router.get('/inventory', (req, res) => {
   db.inventory.find({active:true},(err,docs)=>{
       res.json(docs);
   })
});


router.post('/save-inventory', (req, res) => {

    let body = req.body;
    body.active = true;
    body.createdDate = new Date();

    db.inventory.insert(body, (err, inventory) => {
        res.json({ status: true, ref: inventory._id });
    })
});