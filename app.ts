import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';


import { Connection } from './core'

import userAPI from './api/user';

const connection = new Connection();

connection.connect();

// rest of the code remains same
const app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

const router = express.Router();
router.get("/user", userAPI.find); // GET /api/words
router.post("/user", userAPI.save); // POST /api/posts


app.use("/api", router);

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(process.env.PORT || 3000, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT || 3000}`);
});

