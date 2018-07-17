const Produk = require("../../../controllers/api/pembeli/produk");

const express = require("express");
const router = express.Router();

router.get("/", Produk.index);
router.get("/:id", Produk.show);

module.exports = router;
