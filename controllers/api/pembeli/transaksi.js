const Transaksi = require("../../../models").Transaksi;
const Detail_Transaksi = require("../../../models").Detail_Transaksi;

module.exports = {
  index: (req, res) => {
    Transaksi.findAll({
      where: {
        id_pengguna: req.user.id
      }
    })
      .then(transaksis => res.json(transaksis))
      .catch(err => res.json(err));
  },
  show: (req, res) => {
    Transaksi.findById({
      where: {
        id_pengguna: req.user.id,
        id: req.params.id
      },
      include: [
        {
          model: Detail_Transaksi
        }
      ]
    })
      .then(transaksi => res.json(transaksi))
      .catch(err => res.json(err));
  }
};
