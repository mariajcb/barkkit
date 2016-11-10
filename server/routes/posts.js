`use strict`

var express = require(`express`);
var router = express.Router();
var knex = require(`../db/knex`);

router.get(`/`, (req, res, next) => {
    console.log(`GET ROUTE IS FIRING`);
    knex(`posts`)
        .then(posts => {
            knex(`comments`)
                .then(comments => {
                    posts.forEach(post => {
                        post.comments = []
                        comments.forEach(comment => {
                            post.id == comment.posts_id ? post.comments.push(comment) : null;
                        })
                    })
                    res.json(posts)
                })
        })
});

router.get(`/:id`, function(req, res, next) {
    console.log(`WENT TO THE POSTS ID ROUTE`);
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

router.post(`/addcomment`, (req, res, next) => {
    knex(`comments`)
        .insert(req.body)
        .returning(`*`)
        .then(function(newComment) {
            res.json(newComment)
        })
})

router.put(`/:id`, function(req, res, next) {
  console.log(`EDITING=======`);
    knex(`posts`)
        .where(`id`, req.params.id)
        .first()
        .update(req.body)
        .then(function(post) {
            res.json(`post updated`)
        })
})


router.delete(`/:id`, function(req, res, next) {
    knex(`posts`)
        .where(`id`, req.params.id)
        .first()
        .del()
        .then(function() {
            res.json(`post deleted`)
        })
})

router.delete(`/deletecomment/:id`, function(req, res, next) {
    console.log(`DELETE COMMENT ROUTE IS FIRING, commentID:`, req.params.id);
    knex(`comments`)
        .where(`id`, req.params.id)
        .first()
        .del()
        .then(function() {
            res.json(`post deleted`)
        })
})


module.exports = router;
