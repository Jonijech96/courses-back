const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const UsersCourses = require("../models/usersCourses.models");

class UserServices {
  static async getById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getWithCourses(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
        include: {
          model: UsersCourses,
          as: "courses",
          attributes: ["id"],
          include: {
            model: Courses,
            as: "course",
            attributes: ["title"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = await Users.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
