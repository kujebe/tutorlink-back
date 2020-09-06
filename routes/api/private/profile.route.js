const router = require("express").Router();

const {
  getProfile,
} = require("../../../controllers/api/private/profile.controller");

const checkSession = require("../../../middlewares/check-session");

router.get("/", checkSession, getProfile);

module.exports = router;
