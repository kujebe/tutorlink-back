const router = require("express").Router();
const checkAuth = require("../../../middleware/check-auth");

const {
  getAllTeachers,
  getTeacherBySlug,
} = require("../../../controllers/api/public/teachers.controller");

router.get("/", getAllTeachers);
router.get("/:slug", getTeacherBySlug);

module.exports = router;
