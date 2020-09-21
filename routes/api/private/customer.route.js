const router = require("express").Router();

const {
  getCustomerDashboardData,
  getTeacherForTransaction,
  saveTransaction,
  saveNewTelephone,
  deletePhoneNumber,
} = require("../../../controllers/api/private/customer.controller");

router.get("/dashboard/:userId", getCustomerDashboardData);
router.get("/get-teacher-for-transaction/:teacherId", getTeacherForTransaction);
router.post("/save-transaction", saveTransaction);
router.post("/save-new-phone-number", saveNewTelephone);
router.post("/delete-phone-number", deletePhoneNumber);

module.exports = router;
