import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';

import { Connection } from './core'

import wordAPI from './api/word';

const connection = new Connection();

connection.connect();

// rest of the code remains same
const app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

const router = express.Router();
router.get("/words", wordAPI.find); // GET /api/words
router.post("/words", wordAPI.save); // POST /api/posts


app.use("/api", router);
const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

