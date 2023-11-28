const express = require('express');
import { Express, Request, Response } from "express";
const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!')
})

app.listen(port, () => {
    console.log(`test is listening on port ${port}`)
})