import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection  from './database/db.js';
import Router from './routes/route.js'

import dotenv from 'dotenv'
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


const USERNAME =process.env.DB_USERNAME
const PASSWORD =process.env.DB_PASSWORD

Connection(USERNAME, PASSWORD);