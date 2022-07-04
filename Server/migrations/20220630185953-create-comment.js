'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
          allowNull: false,
        type: Sequelize.TEXT
      },
      messageId: {
          allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
        model: "Posts",
        key: "id",
        as: "messageId"
      }
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE', 
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
          as: "userId"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');
  }
};