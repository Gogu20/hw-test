const express = require('express');
import { Express, Request, Response } from 'express';
const app: Express = express();
require('dotenv').config();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!')
})

app.listen(process.env.PORT, () => {
    console.log(`test is listening on port ${process.env.PORT}`)
})