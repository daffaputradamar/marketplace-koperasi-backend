"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Transaksis", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      total_bayar: {
        type: Sequelize.INTEGER
      },
      total_berat: {
        type: Sequelize.INTEGER
      },
      ongkir: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      bukti: {
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
      id_pengguna: {
        type: Sequelize.INTEGER,
        references: {
          model: "Penggunas",
          key: "id"
        }
      },
      id_kurir: {
        type: Sequelize.INTEGER,
        references: {
          model: "Kurirs",
          key: "id"
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Transaksis");
  }
};
