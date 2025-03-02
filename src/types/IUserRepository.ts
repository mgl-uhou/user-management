export interface UserInterface {
	firstName: string,
	lastName: string,
	email: string,
	password: string,
}

export interface UserReturnInterface {
	id: number, 
	firstName: string,
	lastName: string,
	email: string,
	role: string,
	isActive: number,
	createdAt: Date,
	updatedAt: Date
}
