const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../middlewares");

const { authSchema } = require("../../models/user");

router.post("/signup", validateBody(authSchema), ctrl.signup);

router.post("/login", validateBody(authSchema), ctrl.login);

module.exports = router;
