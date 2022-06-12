const Router = require("express");
const router = new Router();
const controller = require("./authController");
const { check } = require("express-validator");

router.post(
  "/register",
  [
    check("username", "username couldnt be empty").notEmpty(),
    check("password", "password must be longer than 4 symbols").isLength({
      min: 4,
    }),
  ],
  controller.register
);
router.post("/login", controller.login);
router.get("/users", controller.getUsers);

module.exports = router;
