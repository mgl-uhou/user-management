import { Router, Request, Response } from "express";
// import userController from "./controllers/UserController";

const router = Router();

// User Routes
router.get("/", (_req: Request, res: Response) => {
	res.status(200).send("Hello World!");
});

// router.post("/users", userController.create);

export default router;
