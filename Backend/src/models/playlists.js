const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  tracks: [
    {
      name: {
        type: String,
        required: true,
      },
      audio: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("PlaylistSchema", PlaylistSchema);
