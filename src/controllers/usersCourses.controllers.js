const UsersCoursesServices = require("../services/usersCourses.services");

const createUserCourse = async (req, res) => {
  try {
    const newUserCourse = req.body;
    const result = await UsersCoursesServices.create(newUserCourse);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = createUserCourse;
