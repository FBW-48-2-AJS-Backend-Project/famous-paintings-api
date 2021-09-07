import express from 'express';
import Painting from '../models/Painting.js';
const router = express.Router();

const getAllPaintings = async (req, res, next) => {
    try{
        const paintings = await Painting.find();
        res.json(paintings);
    }
    catch(err){
        next(err)
    }
}

router.route('/').get(getAllPaintings);



export default router;