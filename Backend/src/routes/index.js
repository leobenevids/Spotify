const express = require("express");

const router = express.Router();

router.use("/users", require("./userRoutes"));
router.use("/playlists", require("./playlistRoutes"));

module.exports = router;
