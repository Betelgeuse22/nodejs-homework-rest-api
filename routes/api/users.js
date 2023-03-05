const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/users");

const { validateBody } = require("../../middlewares");

const {authSchema} = require("../../models/user");

router.post("/signup", validateBody(authSchema), ctrl.signup);

module.exports = router;
