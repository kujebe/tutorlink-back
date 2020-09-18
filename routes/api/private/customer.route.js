const router = require("express").Router();

const {
  getCustomerDashboardData,
  getTeacherForTransaction,
  saveTransaction,
} = require("../../../controllers/api/private/customer.controller");

router.get("/dashboard/:userId", getCustomerDashboardData);
router.get("/get-teacher-for-transaction/:teacherId", getTeacherForTransaction);
router.post("/save-transaction", saveTransaction);

module.exports = router;
