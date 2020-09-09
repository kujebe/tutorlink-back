const router = require("express").Router();

const {
  getDashboardData,
  saveTransaction,
  saveProfile,
} = require("../../../controllers/api/private/customer.controller");

router.get("/dashboard", getDashboardData);
router.post("/save-profile", saveProfile);
router.post("/save-transaction", saveTransaction);

module.exports = router;
