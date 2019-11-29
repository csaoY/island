const { db } = require("../../core/db");
const { Sequelize, Model } = require("sequelize");
class Art extends Model{

}
Art.init({
    type:sequelize.NUMBER
},{
    sequelize:db,
    tableName:'art'
})