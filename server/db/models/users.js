/* eslint-disable strict */
// eslint-disable-next-line strict
// eslint-disable-next-line lines-around-directive
'use strict';
// eslint-disable-next-line object-curly-spacing
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
        Users.hasMany(models.Orders, {
          foreignKey: 'user_id',
          as: 'ordersMany',
        });
      }
    }
  Users.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      restaurant: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
