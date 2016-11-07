exports.seed = function(knex, Promise) {
    return knex('posts').del()
        .then(() => {
            return Promise.all([
                knex('posts').insert({
                    users_id: 1,
                    title: 'Pup in a Cup',
                    author: 'Bruiser W. Chihuahua',
                    image: "https://static.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317-medium.jpeg",
                    description: "Get a load of that dog!",
                    votes: 1
                }),
                knex('posts').insert({
                    users_id: 2,
                    title: 'A+ Yawning',
                    author: 'Buddy Clinton',
                    image: "https://static.pexels.com/photos/13869/a97c4a1614b53d6f55ae2464b06ba6aa-medium.jpg",
                    description: "Get a load of that dog!",
                    votes: 2
                }),
                knex('posts').insert({
                    users_id: 4,
                    title: 'MAJESTIC',
                    author: 'Willow Corgington the Marquess of Bath',
                    image: "https://static.pexels.com/photos/164186/pexels-photo-164186-medium.jpeg",
                    description: "Get a load of that dog!",
                    votes: 3
                }),
                knex('posts').insert({
                    users_id: 3,
                    title: 'asdfkj;l',
                    author: 'Dogshamers Anonymous',
                    image: "https://dl.dropboxusercontent.com/u/60720250/dogshaming.png",
                    description: "Get a load of that dog!",
                    votes: 4
                }),
            ]);
        });
};
