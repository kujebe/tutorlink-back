const router = require("express").Router();

const {
  getMapPopupData,
  addTeacher,
  seedTeachersData,
} = require("../../../controllers/api/public/home-page.controller");

router.get("/seed-teachers", seedTeachersData);
router.post("/add-teacher", addTeacher);
router.route("/").get(getMapPopupData);

module.exports = router;
