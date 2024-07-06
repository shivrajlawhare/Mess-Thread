import express from 'express';

import {getAllMess, createNewMess} from '../controllers/messControllers.js';

const router = express.Router();

router.get('/', getAllMess);
router.post('/', createNewMess);

export default router;