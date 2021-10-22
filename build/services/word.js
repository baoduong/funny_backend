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
exports.WordService = exports.IWordService = void 0;
const models_1 = require("../models/models");
class IWordService {
}
exports.IWordService = IWordService;
class WordService {
    static find() {
        return models_1.WordModel.find({});
    }
    static save(wordData) {
        return __awaiter(this, void 0, void 0, function* () {
            const word = new models_1.WordModel(Object.assign({}, wordData));
            yield word.save();
            return word;
        });
    }
}
exports.WordService = WordService;
