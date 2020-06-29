const router = require("express").Router();

const {
  getHomePageData,
  addTeacher,
  seedTeachersData,
} = require("../../../controllers/api/public/home-page.controller");

router.route("/").get(getHomePageData).post(addTeacher);

router.get("/seed-data", seedTeachersData);

module.exports = router;
