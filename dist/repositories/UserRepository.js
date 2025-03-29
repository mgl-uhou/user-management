"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UserRepository {
    async create(data) {
        return await database_1.default.user.create({ data });
    }
}
exports.default = new UserRepository();
