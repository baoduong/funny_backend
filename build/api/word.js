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
const word_1 = require("../services/word");
const wordAPI = {
    find: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const words = yield word_1.WordService.find();
            res.json(words);
        }
        catch (error) {
            error.msg = "failed to retrieve posts";
            next(error);
        }
    }),
    save: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const post = yield word_1.WordService.save(req.body);
            res.json(post);
        }
        catch (error) {
            error.msg = "failed to create post";
            next(error);
        }
    }),
};
exports.default = wordAPI;
