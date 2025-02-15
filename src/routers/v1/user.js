// after /users the remaining part of url is handled here

import express from 'express';
import { getProfile, signin, signup } from '../../Controllers/userController.js';
import { zodSignupSchema } from '../../validators/zodSignupSchema.js';
import { Validate } from '../../validators/zodValidator.js';
import { zodSigninSchema } from '../../validators/zodSigninSchema.js';


const router = express.Router(); 

router.get('/profile', getProfile);

/**
 * @swagger
 * /users/signup:
 * post:
 *     Summary: Signup a new user
 *     description: Signup a new user
 
 */

router.post('/signup', Validate(zodSignupSchema), signup);

/**
 * @swagger
 * /users/signin:
 * post:
 *     Summary: Signin a new user
 *     description: Signin a new user
 
 */

router.post('/signin',Validate(zodSigninSchema), signin);

export default router;