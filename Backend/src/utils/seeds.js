const Users = require("../models/users");
const Playlists = require("../models/playlists");

module.exports = {
  defaultUser: async () => {
    const name = "Random User";
    const email = "user@email.com";
    const password = "12345678";

    if (await Users.findOne({ email }))
      return console.log("usuário já criado!");

    await Users.create({
      name,
      email,
      password,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },

  defaultPlaylists: async () => {
    const name = "Random Playlist";
    const cover =
      "https://i.pinimg.com/originals/79/67/2c/79672c94e23ee125b0a734ac6f2e0282.jpg";
    const tracks = [
      {
        name: "Sandstorm",
        audio: "https://www.youtube.com/watch?v=y6120QOlsfU",
      },
      {
        name: "Can't Get Over",
        audio: "https://www.youtube.com/watch?v=-wZl_ZhnVg4",
      },
      {
        name: "All Star",
        audio: "https://www.youtube.com/watch?v=L_jWHffIx5E",
      },
    ];

    if (await Playlists.findOne({ name }))
      return console.log("playlist já criada!");

    await Playlists.create({
      name,
      cover,
      tracks,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
};
