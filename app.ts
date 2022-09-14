import express from 'express'
import dotenv from "dotenv"

dotenv.config()
const app = express()
const port =  3200

app.listen(port, async () => {
    console.log('[server_2] Status OK');
    console.log('[server_2] Run on port:', port);
});