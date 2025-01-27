import express from 'express';
import connectDB from './config/dbConfig.js';
import { createPost } from './Controllers/postControllers.js';
import { s3uplaoder } from './config/multerConfig.js';


const PORT = 3002; // port number
const app = express(); // create express app server instance

app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Home');
})

app.get('/ping/:name', (req, res) => {
    //console.log(req.query);
    console.log(req.body);
    
    // const name = req.params.name
    return res.json({message: 'pong' + ' ' + name });
});

app.get('/hello', (req, res) => {
     return res.json({message: 'Hello World!' });
})

app.post('/hello', (req, res) => {
    return res.json({message: 'POST: Hello World!'});
})

function m1(req, res, next){
    console.log('m1');
    next();   
}

function m2(req, res, next){
    console.log('m2');
    next();    
}

function m3(req, res, next){
    console.log('m3');
    next();   
}

app.post('/posts', s3uplaoder.single('image') , createPost );

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})


/** 
 * npm init -y 
 * npm i express
 * node src/index.js
 */