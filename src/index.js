import express from 'express';
import connectDB from './config/dbConfig.js';
import apiRouter from './routers/apiRouter.js'
import multer from 'multer';
//import postRouter from './routers/post.js'
//import userRouter from './routers/user.js'



const PORT = 3002; // port number
const app = express(); // create express app server instance

const upload = multer();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());
app.use(upload.single('image'));

app.use('/api', apiRouter);  //if the URL has /api , then request is forwarded to the apiRouter

//app.use('/posts', postRouter);  //if the URL has /posts , then use the postRouter to handle the request

//app.use('/api/v1/users', userRouter); //if the url starts wuth /users , then use the userrouter to handle the request

app.get('/', (req, res) => {
    return res.send('Home');
})

app.get('/ping/:name', (req, res) => {
    //console.log(req.query);
    console.log(req.body);
    
    // const name = req.params.name
    return res.json({message: 'pong' + ' ' + name  });
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

//app.post('/posts', s3uplaoder.single('image') , createPost );

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})


/** 
 * npm init -y 
 * npm i express
 * node src/index.js
 */