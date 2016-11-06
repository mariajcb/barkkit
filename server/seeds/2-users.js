exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({username:'bruiser', hashed_pw: '$2a$06$j/VnOcRDbua45s6zjghbpubcF1wjU4mwmvtmuGAN28MfV3PtfZp2W'}),
        knex('users').insert({username:'buddyclinton', hashed_pw: '$2a$06$j/VnOcRDbua45s6zjghbpubcF1wjU4mwmvtmuGAN28MfV3PtfZp2W'}),
        knex('users').insert({username:'dogshamers', hashed_pw: '$2a$06$j/VnOcRDbua45s6zjghbpubcF1wjU4mwmvtmuGAN28MfV3PtfZp2W'}),
      ]);
    });
};
