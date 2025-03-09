import express from 'express';
import { registerUserController, verifyEmailController } from '../controller/userController.js';

const router = express.Router();

router.post('/register', registerUserController);
router.post('/verify-email', verifyEmailController);

export default router;
