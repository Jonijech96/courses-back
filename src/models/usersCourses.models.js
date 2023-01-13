const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const UsersCourses = db.define("users_courses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    field: "user_id",
    allowNull: false,
  },
  courseId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "course_id",
  },
});

module.exports = UsersCourses;
