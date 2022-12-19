import { Router } from 'express';
import { catchErrors } from '../config/helpers';
import { login, signUp } from '../controllers/userController';

const userRouter = Router();

userRouter.post('/signup', catchErrors(signUp));
userRouter.post('/login', catchErrors(login));

export default userRouter;