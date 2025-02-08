// this api router will be triggered when any request starting with /api comes
//import postRouter from './v1/post.js';
//import userRouter from './v1/user.js';

import v1Router from './v1/v1Router.js';

import express from 'express';

const router = express.Router();

router.use('/v1', v1Router);



//router.use('/posts',postRouter); // if in the remaining URL, AFTER/api we have the url starting with /posts,then the reqyest is forwarded to postrouter

//router.use('/users',userRouter);


export default router;