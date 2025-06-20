import express from 'express';
import { refreshToken, auth } from '../controllers/userController.js';

const router = express.Router();

router.post('/refresh-token', refreshToken);
router.post('/signin', auth);

export default router;
