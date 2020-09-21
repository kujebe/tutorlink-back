const router = require("express").Router();

const {
  getCustomerDashboardData,
  getTeacherForTransaction,
  saveTransaction,
  saveNewTelephone,
  updatePhoneNumber,
  deletePhoneNumber,
} = require("../../../controllers/api/private/customer.controller");

router.get("/dashboard/:userId", getCustomerDashboardData);
router.get("/get-teacher-for-transaction/:teacherId", getTeacherForTransaction);
router.post("/save-transaction", saveTransaction);
router.post("/save-new-phone-number", saveNewTelephone);
router.post("/update-phone-number", updatePhoneNumber);
router.post("/delete-phone-number", deletePhoneNumber);

module.exports = router;
