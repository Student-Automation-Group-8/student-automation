const deprecated = require('deprecated');
const { QueryInterface } = require('sequelize');

module.exports = {
  // Migration'in yukarı yönlü (up) işlevi
  up: async (queryInterface, Sequelize) => {
    // 'students' tablosuna 'created_at' sütunu ekleniyor
    await queryInterface.addColumn('students', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    });
    
    // 'students' tablosuna 'updated_at' sütunu ekleniyor
    await queryInterface.addColumn('students', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    });

    // 'departments' tablosuna 'created_at' sütunu ekleniyor
    await queryInterface.addColumn('departments', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    });
    
    // 'departments' tablosuna 'updated_at' sütunu ekleniyor
    await queryInterface.addColumn('departments', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    });
  },

  // Migration'in aşağı yönlü (down) işlevi
  down: async (queryInterface, Sequelize) => {
    // 'students' tablosundan 'created_at' sütunu kaldırılıyor
    await queryInterface.removeColumn('students', 'created_at');
    
    // 'students' tablosundan 'updated_at' sütunu kaldırılıyor
    await queryInterface.removeColumn('students', 'updated_at');
    
    // 'departments' tablosundan 'created_at' sütunu kaldırılıyor
    await queryInterface.removeColumn('departments', 'created_at');
    
    // 'departments' tablosundan 'updated_at' sütunu kaldırılıyor
    await queryInterface.removeColumn('departments', 'updated_at');
  }
};
