import express from 'express';
import { renderHomePage } from '../Controllers/homeController.js';


const router = express.Router();

router.get('/', renderHomePage)


export default router;