const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// Ruts routes
const { createRuts, updateRuts, deleteRuts, getRuts, getAllRuts } = require('../controllers/ruts');
// 
router.post("/ruts/create", checkAuthorizationHeaders,authorizeUser("createRuts") ,createRuts);
router.put("/ruts/update/:id", checkAuthorizationHeaders,authorizeUser("updateRuts"), updateRuts);
router.delete("/ruts/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteRuts"), deleteRuts);
router.get("/ruts/get/:id", checkAuthorizationHeaders, authorizeUser("readRuts"), getRuts);
router.get("/ruts/getAll", checkAuthorizationHeaders, authorizeUser("readRuts"), getAllRuts);

  
module.exports = router;
