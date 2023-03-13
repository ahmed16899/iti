var express = require("express");
var router = express.Router();
var UserController = require("../controllers/userController");

//router.post("/",ProductController.Reg)
router.get("/",UserController.getAll)
router.get("/:userId",UserController.genOne)
router.post("/",UserController.addUser)
router.delete("/:userId",UserController.deleteUser)
router.put("/:userId",UserController.updateUser)





module.exports = router;