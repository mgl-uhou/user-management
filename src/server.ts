import app from "./app";
import prisma from "./database";

app.listen(process.env.PORT, () => {
	console.log(`http://localhost:${process.env.PORT}/api-docs`);
});

// Graceful shutdown
process.on("SIGINT", async () => {
	console.log("SIGINT signal received: closing HTTP server");
	await prisma.$disconnect(); // Remova ou comente esta linha se não estiver usando Prisma
	process.exit(0);
});

process.on("SIGTERM", async () => {
	console.log("SIGTERM signal received: closing HTTP server");
	await prisma.$disconnect(); // Remova ou comente esta linha se não estiver usando Prisma
	process.exit(0);
});
