import express from 'express';
import connectDB from './config/dbConfig.js';

const PORT = 3002; // port number
const app = express(); // create express app server instance

app.get('/', (req, res) => {
    return res.send('Home');
})

app.get('/ping', (req, res) => {
    return res.json({message: 'pong'});
})

app.get('/hello', (req, res) => {
     return res.json({message: 'Hello World!' });
})

app.post('/hello', (req, res) => {
    return res.json({message: 'POST: Hello World!'});
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})


/** 
 * npm init -y 
 * npm i express
 * node src/index.js
 */