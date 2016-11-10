`use strict`

var express = require(`express`);
var router = express.Router();
var knex = require(`../db/knex`);

router.get(`/`, (req, res, next) => {
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
    knex(`posts`)
        .where(`id`, req.params.id)
        .first()
        .update({
            title: req.body.title,
            author: req.body.author,
            post: req.body.post,
            votes: req.body.votes})
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
    knex(`comments`)
        .where(`id`, req.params.id)
        .first()
        .del()
        .then(function() {
            res.json(`post deleted`)
        })
})


module.exports = router;
