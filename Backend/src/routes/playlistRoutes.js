const express = require("express");
const controller = require("../controllers/playlistController");

const router = express.Router();

router.post("/create", controller.create);
router.get("/", controller.findAll);
router.get("/:id", controller.getOne);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
