const { Router } = require("express");
const {
  getUserById,
  getUserWithCourses,
  createUser,
  updateUser,
} = require("../controllers/users.controllers");

const router = Router();

// controladores
//obtener usuario por id
router.get("/users/:id", getUserById);
//obtener usuario con sus cursos
router.get("/users/:id/courses", getUserWithCourses);
//crear usuario
router.post("/users", createUser);
//actualizar usuario
router.put("/users/:id", updateUser);

module.exports = router;
