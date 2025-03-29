import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
// import userController from "./controllers/UserController";

const router = Router();

// User Routes
router.get("/", (_req: Request, res: Response) => {
	res.status(StatusCodes.OK).send("Hello World!");
});

// router.post("/users", userController.create);

export default router;
