'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrinho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Carrinho.belongsTo(models.Usuario, {
        foreignKey: {
          name: 'fk_id_usuario',
          allowNull: false
        }
      });
      Carrinho.hasMany(models.Carrinho_item, {
        foreignKey: {
          name: 'fk_id_carrinho',
          allowNull: false
        }
      })
    }
  }
  Carrinho.init({
    id_carrinho: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize,
    modelName: 'Carrinho',
    timestamps: false,
    freezeTableName: true
  });
  return Carrinho;
};