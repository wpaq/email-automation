import { Router } from 'express';
import emailController from '../controllers/emailController';

const router = new Router();

router.get('/send', emailController.send);

export default router;
