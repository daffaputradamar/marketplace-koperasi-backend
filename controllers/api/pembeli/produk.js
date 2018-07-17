const Produk = require("../../../models").Produk;
const Usaha = require("../../../models").Usaha;

module.exports = {
  index: (req, res) => {
    Produk.findAll()
      .then(produks => res.json(produks))
      .catch(err => res.json(err));
  },
  show: (req, res) => {
    Produk.find({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Usaha
        }
      ]
    })
      .then(produk => res.json(produk))
      .catch(err => res.json(err));
  }
};
