"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import userController from "./controllers/UserController";
const router = (0, express_1.Router)();
// User Routes
router.get("/", (_req, res) => {
    res.status(200).send("Hello World!");
});
// router.post("/users", userController.create);
exports.default = router;
