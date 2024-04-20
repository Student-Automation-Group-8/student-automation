'use strict';

export default (sequelize, DataTypes) => {

  const StudentCounter = sequelize.define("student-counter", {
    counter: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate:{
        isInt: true
      }
    }  
  });
  return StudentCounter;
}