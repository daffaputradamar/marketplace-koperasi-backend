const KategoriRouter = require("./kategori");
const KeranjangRouter = require("./keranjang");
const ProdukRouter = require("./produk");
const TransaksiRouter = require("./transaksi");

const express = require("express");
const router = express.Router();

router.use("/kategori", KategoriRouter);
router.use("/keranjang", KeranjangRouter);
router.use("/produk", ProdukRouter);
router.use("/transaksi", TransaksiRouter);

module.exports = router;
