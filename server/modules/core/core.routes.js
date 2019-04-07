var router = require('express').Router();
var db = require('../../conf/db');

router.post('/login', (req, res) => {
    let body = req.body;
    db.users.findOne({ username: body.username, password: body.pwd, active: true }, (err, user) => {
        if (err) {
            res.json({ status: false, error: "Internal server error" });
        } else if (user && user._id) {
            res.json({ status: true, username: user.username, role: user.role });
        } else {
            res.json({ status: false, error: 'username password not matched!' });
        }
    })

});

router.get('/add-users', (req, res) => {
    db.users.insert([
        {
            username: 'admin',
            password: 'admin',
            role: "admin",
            active: true
        },
        {
            username: 'user1',
            password: 'user1',
            role: "user",
            active: true
        },
        {
            username: 'user2',
            password: 'user2',
            role: "user",
            active: true
        }
    ], (err, docs) => {
        res.json({ msg: 'Stored' });
    })
});


module.exports = router;