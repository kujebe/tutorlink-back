const router = require("express").Router();

const {
  getMapPopupData,
  addTeacher,
  seedTeachersData,
} = require("../../../controllers/api/public/home-page.controller");

router.route("/").get(getMapPopupData).post(addTeacher);

router.get("/seed-data", seedTeachersData);

module.exports = router;
