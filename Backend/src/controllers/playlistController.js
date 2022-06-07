const Playlists = require("../models/playlists");

module.exports = {
  create: async (req, res) => {
    try {
      const register = await Playlists.create(req.body);
      return res.status(201).json(register);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ err: err });
    }
  },

  findAll: async (req, res) => {
    try {
      const getAll = await Playlists.find();
      return res.status(200).json(getAll);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ err: err });
    }
  },

  getOne: async (req, res) => {
    try {
      const findOne = await Playlists.findById(req.params.id);
      return res.status(200).json(findOne);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ err: err });
    }
  },

  update: async (req, res) => {
    const { name, cover, tracks } = req.body;
    try {
      const updated = await Playlists.findByIdAndUpdate(
        { _id: req.params.id },
        { name: name, cover: cover, tracks: tracks },
        { new: true }
      );
      return res.status(200).json(updated);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ err: err });
    }
  },

  delete: async (req, res) => {
    try {
      const playlist_id = req.params.id;
      await Playlists.findByIdAndDelete(playlist_id);
      return res.status(200).json({success: "playlist deleted"});
    } catch (err) {
      console.log(err);
      return res.status(400).json({ err: err });
    }
  },
};
