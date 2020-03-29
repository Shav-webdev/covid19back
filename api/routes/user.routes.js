const { createUser, getUsers } = require("../handlers/user.handlers");
let bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { Router } = require("express");
const router = Router();

router.post("/users", jsonParser, createUser);
router.get("/users", getUsers);

module.exports = router;
