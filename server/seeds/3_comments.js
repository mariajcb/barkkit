
exports.seed = function(knex, Promise) {

    return knex('comments').del()
        .then(function() {
            return Promise.all([

                knex('comments').insert({
                  posts_id: 1,
                  users_id: 4,
                  author: "Willow Corgington the Marquess of Bath",
                  content: "Cups are for tea. This is highly improper!"
                }),

                knex('comments').insert({
                  posts_id: 4,
                  users_id: 2,
                  author: "Buddy Clinton",
                  content: "This is a serious problem in our community and you should not make fun of it."
                })

            ]);
        });
};
