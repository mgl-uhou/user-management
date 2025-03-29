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

import { Request, Response } from "express";
import userRepository from "../repositories/UserRepository";

export class UserController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { firstName, lastName, email, password } = req.body;
        
        try {
            const user = await userRepository.create({ firstName, lastName, email, password });
            return res.status(201).json(user);       
        } catch(error: unknown) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default new UserController();