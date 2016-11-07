'use strict'

var express = require('express');
var router = express.Router();
var knex = require(`../db/knex`);
var bcrypt = require('bcrypt')

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
router.post('/signup', function(req, res, next) {
  knex('users').where('username', req.body.username).then(function(results) {
    if (results.length >= 1) {
      console.log('User already exists!');
    } else {
      let hash = bcrypt.hashSync(req.body.password, 12)
      knex('users')
      .returning('*')
      .insert({
        username: req.body.username,
        hashed_pw: hash
      }).then(function(results){
        let userSesh = results[0]
        delete userSesh.hashed_pw
        req.session.userInfo = userSesh
        res.send('User signed up!')
      })
    }
  })
})

router.post('/login', function(req, res, next){
  knex('users').where('username', req.body.username)
  .then(function(results){
    if (results.length < 1){
      console.log('Not authorized');
    } else {
      let isValid = bcrypt.compareSync(req.body.password, results[0].hashed_pw)
      if (isValid){
        let userSesh = results[0]
        delete userSesh.hashed_pw
        req.session.userInfo = userSesh
        res.send('User logged in!')
      } else {
        console.log('wrong password');
      }
    }
  })
})


module.exports = router;
