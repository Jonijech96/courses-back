const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const UsersCourses = require("../models/usersCourses.models");
const Videos = require("../models/videos.models");
const db = require("../utils/database");

const users = [
  {
    firstName: "jonik",
    lastName: "wick",
    password: "1234",
    email: "jonik@gmail.com",
  },
  {
    firstName: "Ian",
    lastName: "ianacus",
    password: "1234",
    email: "ian@gmail.com",
  },
];

const courses = [
  { title: "Algebra", description: "turno mañana", instructor: "Pedro" },
  { title: "Literatura", description: "turno tarde", instructor: "Juan" },
  { title: "Networkin", description: "turno madrugada", instructor: "Jhorman" },
];

const categories = [
  { name: "ciencias exactas", courseId: "1" },
  { name: "Letras", courseId: "2" },
  { name: "Empleo", courseId: "3" },
];

const videos = [
  { title: "Integrales", url: "video-integral.com", courseId: 1 },
  { title: "Matematics", url: "video-Matematics.com", courseId: 1 },
  { title: "Geometric", url: "video-Geometric.com", courseId: 3 },
];

const userCourses = [
  { userId: 1, courseId: 2 },
  { userId: 2, courseId: 3 },
  { userId: 2, courseId: 1 },
];

db.sync({ force: true }).then(() => {
  console.log("inyectando datos");
  users.forEach((user) => Users.create(user));
  setTimeout(() => {
    courses.forEach((course) => Courses.create(course));
  }, 100);
  setTimeout(() => {
    userCourses.forEach((userCourse) => UsersCourses.create(userCourse));
  }, 250);
  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
  }, 300);
  setTimeout(() => {
    videos.forEach((video) => Videos.create(video));
  }, 400);
});
