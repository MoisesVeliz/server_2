import express, { Request, Response } from 'express'
import dotenv from "dotenv"

dotenv.config()
const app = express()
const port =  process.env.port

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/server_2', async (req: Request, res: Response) => {
    try {
        res.send('Hola mundo desde el server 2')
    } catch (error) {
     console.log(error);
    }
})

app.listen(port, async () => {
    console.log('[server_2] Status OK');
    console.log('[server_2] Run on port:', port);
});