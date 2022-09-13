import express from 'express'

const app = express()
const port =  6550

app.listen(port, async () => {
    console.log('[server] Status OK');
    console.log('[server] Run on port:', port);
});