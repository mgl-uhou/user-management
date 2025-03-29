"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
// import userController from "./controllers/UserController";
const router = (0, express_1.Router)();
// User Routes
router.get("/", (_req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).send("Hello World!");
});
// router.post("/users", userController.create);
exports.default = router;
