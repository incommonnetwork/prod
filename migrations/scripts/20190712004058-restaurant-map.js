'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */

        await queryInterface.addColumn('restaurants', 'map', {
            type: Sequelize.STRING,
            allowNull: false
        })

    },

    down: async (queryInterface) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.dropTable('users');
        */

        await queryInterface.removeColumn('restaurants', 'map')
    }
};
