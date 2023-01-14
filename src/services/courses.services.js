const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");

class CourseServices {
    static async getAll(){
        try {
            const result = await Courses.findAll;
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getWithCategoriesVideos(){
        try {
            const result = await Courses.findAll({include:[
                {
                model: Categories,
                as:"category",
            }, {
                model: Videos,
                as:"video",
        }
            ]
                
        });
            return result;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = CourseServices;