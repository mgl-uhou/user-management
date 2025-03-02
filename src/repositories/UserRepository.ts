import prisma from "../database";
import { UserInterface } from "../types/IUserRepository";

class UserRepository {
	async create(data: UserInterface) {
		return await prisma.user.create({ data });
	}
}

export default new UserRepository();
