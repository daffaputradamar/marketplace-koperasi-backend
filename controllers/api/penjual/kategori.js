const Kategori = require("../../../models").Kategori;

module.exports = {
  index: (req, res) => {
    Kategori.findAll()
      .then(kategoris => res.json(kategoris))
      .catch(err => res.json(err));
  },
  show: (req, res) => {
    Kategori.find({
      where: {
        id: req.params.id
      }
    })
      .then(kategori => res.json(kategori))
      .catch(err => res.json(err));
  }
};
