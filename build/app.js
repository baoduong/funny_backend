"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const core_1 = require("./core");
const word_1 = __importDefault(require("./api/word"));
const connection = new core_1.Connection();
connection.connect();
// rest of the code remains same
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const router = express_1.default.Router();
router.get("/words", word_1.default.find); // GET /api/words
router.post("/words", word_1.default.save); // POST /api/posts
app.use("/api", router);
const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
