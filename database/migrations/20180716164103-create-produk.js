"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Produks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      keterangan: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      harga: {
        type: Sequelize.INTEGER
      },
      berat: {
        type: Sequelize.INTEGER
      },
      satuan: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id_usaha: {
        type: Sequelize.INTEGER,
        references: {
          model: "Usahas",
          key: "id"
        }
      },
      id_kategori: {
        type: Sequelize.INTEGER,
        references: {
          model: "Kategoris",
          key: "id"
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Produks");
  }
};
