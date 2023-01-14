const CourseServices = require("../services/courses.services");

const getAllCourses = async(req,res)=>{
    try {
        const result = await CourseServices.getAll();
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getAllCoursesWithCategoriesVideos = async(req,res)=>{
    try {
        const result = await CourseServices.getWithCategoriesVideos();
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {getAllCourses,getAllCoursesWithCategoriesVideos};