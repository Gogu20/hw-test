import { formatDate } from './date';
const express = require('express');
import { Express, Request, Response } from 'express';
const app: Express = express();
require('dotenv').config();

function logger(req: Request, res: Response, next: any): void {
    console.log(`${formatDate(new Date)} - ${req.method} - ${req.url}`);
    next();
} app.use(logger);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!')
})

app.get("/test", (req: Request, res: Response) => {
    res.json({ok: true});
})

app.get("/guests/:name", (req: Request, res: Response) => {
    res.send(`Hi ${req.params.name}!`);
})

app.listen(process.env.PORT, () => {
    console.log(`test is listening on port ${process.env.PORT}`)
})