const express = require("express");
const router = express.Router();
const { login, register, resetPasswordRequest, resetPassword, validateSession} = require("../controller/AuthController");
const { authenticateToken, authorizeRole} = require("../security/Auth");

router.post("/login", login);
router.post("/register", register);


router.get("/validate-session", authenticateToken, validateSession); // Use authenticateToken middleware


router.post("/reset-password-request", resetPasswordRequest); // Route for requesting a password reset
router.post("/reset-password", resetPassword); // Route for resetting the password


// router.post("/register", authenticateToken, authorizeRole("ADMIN"), register);

module.exports = router;
