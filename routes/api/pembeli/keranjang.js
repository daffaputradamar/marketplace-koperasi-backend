const Keranjang = require("../../../controllers/api/pembeli/keranjang");
const express = require("express");
const router = express.Router();

router.get("/", Keranjang.index);
router.post("/", Keranjang.store);
router.put("/:id", Keranjang.update);
router.delete("/:id", Keranjang.destroy);

module.exports = router;
