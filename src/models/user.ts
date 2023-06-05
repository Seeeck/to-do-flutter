import {  DataTypes, Model } from "sequelize";
import { Task } from "./task";
import db from "../config/database";




class User extends Model {
  // Define other properties and methods of the User model here
}

User.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    google_id: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize: db,
    timestamps: true,
    createdAt: true,
    updatedAt: true
  }
);


export { User };