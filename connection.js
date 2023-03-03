const { Sequelize, DataTypes, Model } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
  process.env.PGDB,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: process.env.PGDIALECT,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

 const FavPackage = sequelize.define(
  "FavPackage",
  {
    // Model attributes are defined here
    id:{
      type: DataTypes.UUID,
      allowNull:false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pack_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
  
);
const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull:false
    }
  }
  
);
User.sync({ alter: true });
FavPackage.sync({ alter: true });

module.exports = {
  User,
  FavPackage
}
