import express from 'express';
import Painting from '../models/Painting.js';
const router = express.Router();

import {
    getAllPaintings,
    getPainting,
    createPainting,
    updatePainting,
    deletePainting
} from '../controllers/paintingControllers.js';

router.route('/').get(getAllPaintings).post(createPainting);

router.route('/:id').get(getPainting).put(updatePainting).delete(deletePainting);



export default router;