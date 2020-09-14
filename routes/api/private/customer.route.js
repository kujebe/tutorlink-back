const router = require("express").Router();

const {
  getCustomerDashboardData,
  saveTransaction,
} = require("../../../controllers/api/private/customer.controller");

router.get("/dashboard/:userId", getCustomerDashboardData);
router.post("/save-transaction", saveTransaction);

module.exports = router;
