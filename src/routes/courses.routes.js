const { Router } = require("express");
const {
  getAllCourses,
  getAllCoursesWithCategoriesVideos,
  createCourse,
  updateCourse,
} = require("../controllers/courses.controllers");

const router = Router();

router.get("/courses", getAllCourses);

router.get("/courses/all", getAllCoursesWithCategoriesVideos);

router.post("/courses", createCourse);

router.put("/courses", updateCourse);

module.exports = router;
