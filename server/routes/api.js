'use strict'

var express = require('express');
var router = express.Router();
var knex = require(`../db/knex`);

router.get('/', (req, res, next) => {
  console.log("GETTING ALL===========");
  knex('posts')
  .then(posts => {
    console.log("THIS IS THE POST OBJECT", posts);
    res.json(posts)
  })
});

module.exports = router;
