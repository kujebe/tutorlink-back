const router = require("express").Router();
const uploader = require("../../../utils/file-uploader");

const {
  getCustomerDashboardData,
  getTeacherForTransaction,
  saveTransaction,
  saveNewTelephone,
  updatePhoneNumber,
  deletePhoneNumber,
  updateProfilePhoto,
  updateProfile,
  addChild,
} = require("../../../controllers/api/private/customer.controller");

router.get("/dashboard/:userId", getCustomerDashboardData);
router.get("/get-teacher-for-transaction/:teacherId", getTeacherForTransaction);
router.post("/save-transaction", saveTransaction);
router.post("/save-new-phone-number", saveNewTelephone);
router.post("/update-phone-number", updatePhoneNumber);
router.post("/delete-phone-number", deletePhoneNumber);
router.post("/update-profile", updateProfile);
router.post("/add-child", addChild);
router.post(
  "/update-profile-photo",
  uploader("customer-avatar", "avatar"),
  updateProfilePhoto
);

module.exports = router;
