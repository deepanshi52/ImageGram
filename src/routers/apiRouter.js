// this api router will be triggered when any request starting with /api comes
import postRouter from './post.js'

import express from 'express';

const router = express.Router();

router.use('/posts',postRouter); // if in the remaining URL, AFTER/api we have the url starting with /posts,then the reqyest is forwarded to postrouter

export default router;