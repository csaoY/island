const { db } = require("../../core/db");
const { Sequelize, Model } = require("sequelize");
class Classic extends Model{

}
Classic.init(
    {
        
    },{
    sequelize:db
})

module.exports=Classic;