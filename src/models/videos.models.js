const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Videos = db.define("videos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  url: {
    type: DataTypes.STRING,
    unique: true,
  },
  courseId: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: "course_id",
  },
});

module.exports = Videos;
