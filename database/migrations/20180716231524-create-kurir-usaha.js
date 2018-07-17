"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Kurir_Usahas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable("Kurir_Usahas");
  }
};
