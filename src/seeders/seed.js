const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const UsersCourses = require("../models/usersCourses.models");
const Videos = require("../models/videos.models");
const db = require("../utils/database");

const users = [
  {
    firstName: "jonik",
    lastname: "wick",
    password: "1234",
    email: "jonik@gmail.com",
  },
  {
    firstName: "Ian",
    lastname: "ianacus",
    password: "1234",
    email: "ian@gmail.com",
  },
];

const courses = [
  { title: "Algebra", description: "turno mañana", instrutor: "Pedro" },
  { title: "Literatura", description: "turno tarde", instrutor: "Juan" },
  { title: "Networkin", description: "turno madrugada", instrutor: "Jhorman" },
];

const categories = [
  { name: "ciencias exactas", course_id: "1" },
  { name: "Letras", course_id: "2" },
  { name: "Empleo", course_id: "3" },
];

const videos = [
  { title: "Integrales", url: "video-integral.com", course_id: 1 },
  { title: "Integrales", url: "video-integral.com", course_id: 1 },
  { title: "Integrales", url: "video-integral.com", course_id: 3 },
];

const userCourses = [
  { user_id: 1, course_id: 2 },
  { user_id: 2, course_id: 3 },
];

db.sync({ force: true }).then(() => {
  console.log("inyectando datos");
  users.forEach((user) => Users.create(user));
  setTimeout(() => {
    courses.forEach((course) => Courses.create(course));
  }, 100);
  setTimeout(() => {
    userCourses.forEach((userCourse) => UsersCourses.create(userCourse));
  }, 200);
  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
  }, 300);
  setTimeout(() => {
    videos.forEach((video) => Videos.create(video));
  }, 400);
});
