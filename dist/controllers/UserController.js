"use strict";
/* import { Request, Response } from "express";
import userRepository from "../repositories/UserRepository";

class UserController {
    post = async (req: Request, res: Response) => {
        const { firstName, lastName, email, password } = req.body;

        try{
            const user = await userRepository.create({ firstName, lastName, email, password });
            return res.status(201).json(user);
        }catch(e: Error | any){
            if (e instanceof Error)
                res.status(400).json( { message: e.message });

            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default new UserController(); */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
class UserController {
    async create(req, res) {
        const { firstName, lastName, email, password } = req.body;
        try {
            const user = await UserRepository_1.default.create({ firstName, lastName, email, password });
            return res.status(201).json(user);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}
exports.UserController = UserController;
exports.default = new UserController();
