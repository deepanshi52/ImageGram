import express from 'express';
import postRouter from './post.js';
import userRouter from './user.js';

const router = express.Router();

router.use('/posts',postRouter); // if in the remaining URL,  after /api/v1  we have the url starting with /posts,then the reqyest is forwarded to postrouter

router.use('/users',userRouter);

export default router;