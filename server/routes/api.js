'use strict'

var express = require('express');
var router = express.Router();
var knex = require(`../db/knex`);

router.get('/', (req, res, next) => {
  console.log("GETTING ALL===========");
  knex('posts')
  .then(posts => {
    res.json(posts)
  })
});

router.post(`/`, (req, res, next) => {
    console.log(`POSTING===============`);
    knex(`posts`)
        .insert(req.body)
        .returning(`*`)
        .then(function(newPost) {
            console.log(newPost);
            res.json(newPost)
        })
})

module.exports = router;
