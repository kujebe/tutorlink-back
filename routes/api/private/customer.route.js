const router = require("express").Router();

const {
  getCustomerDashboardData,
  getTeacherForTransaction,
  saveTransaction,
  saveNewTelephone,
} = require("../../../controllers/api/private/customer.controller");

router.get("/dashboard/:userId", getCustomerDashboardData);
router.get("/get-teacher-for-transaction/:teacherId", getTeacherForTransaction);
router.post("/save-transaction", saveTransaction);
router.post("/save-new-phone-number", saveNewTelephone);

module.exports = router;
