const { Router } = require("express");
const createUserCourse = require("../controllers/usersCourses.controllers");

const router = Router();

router.post("/user-course", createUserCourse);

module.exports = router;
