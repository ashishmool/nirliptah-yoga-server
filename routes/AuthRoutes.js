const express = require("express");
const router = express.Router();
const { login, register, resetPasswordRequest, resetPassword, validateSession, registerMobile, resetPasswordMobile,
    resetPasswordRequestMobile, verifyOtp
} = require("../controller/AuthController");
const { authenticateToken, authorizeRole} = require("../security/Auth");

router.post("/login", login);
router.post("/register", register);

router.post("/register-mobile", registerMobile);
router.post("/reset-password-mobile", resetPasswordMobile);
router.post("/reset-password-request-mobile", resetPasswordRequestMobile);
router.post("/verify-otp", verifyOtp); // Route for verifying OTP

router.get("/validate-session", authenticateToken, validateSession);

router.post("/reset-password-request", resetPasswordRequest);
router.post("/reset-password", resetPassword);

module.exports = router;
