const {Router} = require('express');
const { getAllCourses, getAllCoursesWithCategoriesVideos } = require('../controllers/courses.controllers');

const router = Router();

router.get("/courses",getAllCourses);

router.get("/courses/all",getAllCoursesWithCategoriesVideos);

module.exports = router;