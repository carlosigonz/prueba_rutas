const router = require("express").Router();
const { ProfileController } = require("../controllers");
const profileController = require("../controllers/profile.controller");

router.get("/profile", profileController.profile);

module.exports = router;