'use strict'

var express = require('express');
var router = express.Router();
var knex = require(`../db/knex`);

router.get('/', (req, res, next) => {
  knex('posts')
  .then(posts => {
    res.json(posts)
  })
});

router.get(`/:id`, function(req, res, next) {
    knex(`posts`)
        .where(`id`, req.params.id)
        .first()
        .then(function(post) {
            res.json(post)
        })
})

router.post(`/`, (req, res, next) => {
    knex(`posts`)
        .insert(req.body)
        .returning(`*`)
        .then(function(newPost) {
            res.json(newPost)
        })
})

router.put(`/:id`, function(req, res, next) {
  console.log(`EDITING=======`);
    knex(`posts`)
        .where(`id`, req.params.id)
        .first()
        .update(req.body)
        .then(function(post) {
            res.json('post updated')
        })
})

router.delete(`/:id`, function(req, res, next) {
    knex(`posts`)
        .where(`id`, req.params.id)
        .first()
        .del()
        .then(function() {
            res.json('post deleted')
        })
})

module.exports = router;
