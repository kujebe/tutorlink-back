const router = require("express").Router();

const {
  getTeacher,
} = require("../../../controllers/api/public/teachers.controller");

router.get("/:teacher_id", getTeacher);

module.exports = router;
