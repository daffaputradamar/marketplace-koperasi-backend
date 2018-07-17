const Transaksi = require("../../../controllers/api/pembeli/transaksi");

const express = require("express");
const router = express.Router();

router.get("/", Transaksi.index);
router.get("/:id", Transaksi.show);

module.exports = router;
