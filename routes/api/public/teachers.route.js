const router = require("express").Router();

const {
  getAllTeachers,
  getTeacherBySlug,
} = require("../../../controllers/api/public/teachers.controller");

router.get("/", getAllTeachers);
router.get("/search", getAllTeachers);
router.get("/:slug", getTeacherBySlug);

module.exports = router;
