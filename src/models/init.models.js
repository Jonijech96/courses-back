const Categories = require("./categories.models");
const Courses = require("./courses.models");
const Users = require("./users.models");
const UsersCourses = require("./usersCourses.models");
const Videos = require("./videos.models");

const initModels = () => {
  //relacion 1 a n entre users y usercourses
  Users.hasMany(UsersCourses, { as: "courses", foreignKey: "user_id" });
  UsersCourses.belongsTo(Users, { as: "student", foreignKey: "user_id" });

  //relacion 1 a n entre courses y usercourses
  Courses.hasMany(UsersCourses, { as: "students", foreignKey: "course_id" });
  UsersCourses.belongsTo(Courses, { as: "course", foreignKey: "course_id" });

  // relacion 1 a n entre courses y categories
  Courses.hasMany(Categories, { as: "category", foreignKey: "course_id" });
  Categories.belongsTo(Courses, { as: "course_c", foreignKey: "course_id" });

  // relacion 1 a n entre courses y categories
  Courses.hasMany(Videos, { as: "video", foreignKey: "course_id" });
  Videos.belongsTo(Courses, { as: "course-v", foreignKey: "course_id" });
};

module.exports = initModels;
