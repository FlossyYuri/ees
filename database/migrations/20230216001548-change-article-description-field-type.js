'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('articles', 'description', {
      type: Sequelize.TEXT,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('articles', 'description', {
      type: Sequelize.STRING,
      allowNull: true
    });
  }
};
