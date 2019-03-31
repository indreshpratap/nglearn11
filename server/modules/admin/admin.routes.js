var router = require('express').Router();
var db = require('../../conf/db');

module.exports = router;



router.get('/inventory', (req, res) => {
    db.inventory.find({ active: true }, (err, docs) => {
        res.json(docs);
    })
});
router.get('/inventory/:id', (req, res) => {
    db.inventory.findOne({ _id: req.params.id, active: true }, (err, doc) => {
        res.json(doc);
    })
});


router.post('/save-inventory', (req, res) => {

    let body = req.body;
    let id = body.id;
    if (id) {
        delete body.id;
        body.updatedDate = new Date();
        db.inventory.update({ _id: id }, { $set: body }, (err, count) => {
            if (err) {
                res.status(500).json({ status: false, message: 'Failed to save' });
            } else {
                res.json({ status: true });
            }
        })
    } else {
        body.active = true;
        body.createdDate = new Date();

        db.inventory.insert(body, (err, inventory) => {
            res.json({ status: true, ref: inventory._id });
        })
    }
});


router.post("/save-category", (req, res) => {
    let body = req.body;
    db.category.remove({}, (err, num) => {
        if (err) {
            res.json({ status: false, message: 'Failed to clear old category' })
        } else {
            db.category.insert({ category: body }, (insererror, docs) => {
                if (insererror) {
                    res.json({ status: false, message: 'Failed to insert category' });
                } else {
                    res.json({ status: true, ref: docs._id });
                }
            })
        }
    })
});