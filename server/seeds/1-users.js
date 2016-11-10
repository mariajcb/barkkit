exports.seed = function(knex, Promise) {
  return knex(`users`).del()
    .then(function() {
      return Promise.all([
        knex(`users`).insert({username:`bruiser`, password: `testing`}),
        knex(`users`).insert({username:`buddyclinton`, password: `testing`}),
        knex(`users`).insert({username:`dogshamers`, password: `testing`}),
        knex(`users`).insert({username:`willow`, password: `testing`}),
      ]);
    });
};
