import { Router } from 'express';
import emailController from '../controllers/emailController';

const router = new Router();

router.post('/send', emailController.send);

export default router;
