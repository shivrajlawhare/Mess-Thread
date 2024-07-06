import express from 'express';

import { getAllReviews, getMessReview, createReview } from '../controllers/reviewControlllers.js';

const router = express.Router();

router.post('/',createReview);
router.get('/', getAllReviews); 
router.get('/:messName', getMessReview);
// router.get('/', (req, res) => {
//     if (req.query.messName) {
//       return getMessReview(req, res);
//     } else {
//       return getAllReviews(req, res);
//     }
//   });


export default router;