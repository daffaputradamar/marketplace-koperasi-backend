const Keranjang = require("../../../models").Keranjang;

module.exports = {
  index: (req, res) => {
    Keranjang.findAll({
      where: {
        id_pengguna: req.user.id
      }
    });
  },
  store: (req, res) => {
    Keranjang.create(req.body)
      .then(newItem => res.json(newItem))
      .catch(err => res.json(err));
  },
  update: (req, res) => {
    Keranjang.findById(req.params.id)
      .then(item => item.update(req.body))
      .then(updatedItem => res.json(updatedItem))
      .catch(err => res.json(err));
  },
  destroy: (req, res) => {
    Keranjang.findById(req.params.id)
      .then(item => item.destroy())
      .then(deletedItem => res.json(deletedItem))
      .catch(err => res.json(err));
  }
};
