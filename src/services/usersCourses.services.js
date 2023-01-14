const UsersCourses = require("../models/usersCourses.models");

class UsersCoursesServices {
  static async create(userCourse) {
    try {
      const result = await UsersCourses.create(userCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersCoursesServices;
