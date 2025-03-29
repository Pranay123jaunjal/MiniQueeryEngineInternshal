const express = require("express");
const { handleQuery, explainQuery, validateQuery } = require("../controllers/queryController");
const { authenticate } = require("../middleware/auth");

const router = express.Router();

router.post("/query", authenticate, handleQuery);
router.post("/explain", authenticate, explainQuery);
router.post("/validate", authenticate, validateQuery);

module.exports = router;
