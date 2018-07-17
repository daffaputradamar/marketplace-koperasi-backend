const Kategori = require("../../../controllers/api/pembeli/kategori");
const express = require("express");
const router = express.Router();

router.get("/", Kategori.index);
router.get("/:id", Kategori.show);

module.exports = router;
