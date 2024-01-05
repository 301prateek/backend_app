const express = require("express");

const router = express();

router.route("/").post(userRegistration, (req, res) => {});
