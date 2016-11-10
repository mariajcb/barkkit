var express = require(`express`);
var router = express.Router();
var knex = require(`../db/knex`);
var bcrypt = require(`bcrypt`);


router.post(`/`, function(req, res, next) {
    knex(`users`)
        .where(`username`, req.body.username)
        .then(function(user) {
            if (user.length === 0) {
                const hashed_password = bcrypt.hashSync(req.body.password, 8)

                const newUser = {
                    username: req.body.username,
                    password: hashed_password
                }

                knex(`users`)
                    .insert(newUser, `*`)
                    .then(function(user) {
                        res.json(user)
                    })
            } else {
                const error = [`Username is already in use.`]
                res.json(error)
            }

        })
})


module.exports = router;
