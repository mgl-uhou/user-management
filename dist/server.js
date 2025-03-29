"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./database"));
app_1.default.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}/api-docs`);
});
// Graceful shutdown
process.on("SIGINT", async () => {
    console.log("SIGINT signal received: closing HTTP server");
    await database_1.default.$disconnect();
    process.exit(0);
});
process.on("SIGTERM", async () => {
    console.log("SIGTERM signal received: closing HTTP server");
    await database_1.default.$disconnect();
    process.exit(0);
});
