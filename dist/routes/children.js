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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Child = require('../models/Child');
router.get('/', (req, res) => {
    return res.status(200).json({ message: 'We are on route Children' });
});
//register Child
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, city, school, grade, father, mother, phone, email, attending_other } = req.body;
    // Create new Child
    const newChild = new Child({ name, age, city, school, grade, father, mother, phone, email, attending_other });
    //Save Child
    const savedChild = yield newChild.save();
    res.status(200).json({ message: "Registration Successful" });
}));
module.exports = router;
