const express = require("express");
const crookieController = require("../controllers/crookieController");

const router = express.Router();

router.get("/", crookieController.getbase);
router.get("/cooktime", crookieController.getcook);
router.get("/login", crookieController.getlogin);

module.exports = router;
