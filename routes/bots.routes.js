const router = require("express").Router();
const { BotsController } = require("../controllers");

router.get("/bots", BotsController.bots);

module.exports = router;