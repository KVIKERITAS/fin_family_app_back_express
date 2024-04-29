"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db/db");
const getCurrentUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentUser = yield db_1.db.user.findFirst({ where: { id: req.userId } });
        if (!currentUser)
            return res.status(404).json({ message: 'User not found' });
        res.json(currentUser);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
});
const createNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { auth0Id } = req.body;
        const existingUser = yield db_1.db.user.findUnique({ where: { auth0Id } });
        if (existingUser)
            return res.status(200).send();
        const newUser = yield db_1.db.user.create({ data: req.body });
        res.status(201).json(newUser);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating user' });
    }
});
const updateCurrentUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const user = yield db_1.db.user.findFirst({ where: { id: req.userId } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.name = name;
        yield db_1.db.user.update({ where: { id: req.userId }, data: user });
        res.send(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating user' });
    }
});
exports.default = { getCurrentUser, createNewUser, updateCurrentUser };
