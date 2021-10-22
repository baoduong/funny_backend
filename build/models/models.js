"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const word_1 = __importDefault(require("../schema/word"));
const WordModel = mongoose_1.default.model("Word", word_1.default);
exports.WordModel = WordModel;
