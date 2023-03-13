var express = require("express");
var router = express.Router();
var ProductController = require("../controllers/productController");

//router.post("/",ProductController.Reg)
router.get("/",ProductController.getAll)
router.get("/:productId",ProductController.genOne)
router.post("/",ProductController.addProduct)
router.delete("/:productId",ProductController.deleteProduct)
router.put("/:productId",ProductController.updateProduct)





module.exports = router;