import Painting from '../models/Painting.js';
import createError from 'http-errors';

export const getAllPaintings = async (req, res, next) => {
    try{
        const paintings = await Painting.find();
        res.json(paintings);
    }
    catch(err){
        next(err)
    }
}

export const getPainting = async (req, res, next) => {
    try{
        const { id } = req.params;
        const painting = await Painting.findById(id);
        if(!painting) throw new createError(404, `No Painting matching the id: ${id} was found.`);
        res.json(painting)
    }
    catch(err){
        next(err)
    }
}

export const createPainting = async (req, res, next) => {
    try{
        let data = req.body;
        const painting = await Painting.create(data);
        res.json(painting)
    }
    catch(err){
        next(err)
    }
}

export const updatePainting = async (req, res, next) => {
    try{
        const { id } = req.params;
        const newData = req.body;
        const painting = await Painting.findByIdAndUpdate(id, newData, {new: true});
        if(!painting) throw new createError(404, `No Painting matching the id: ${id} was found.`) 
        res.json(painting);
    }
    catch(err){
        next(err)
    }
}

export const deletePainting = async (req, res, next) => {
    try{
        const { id } = req.params;
        const paintingDeleted = await Painting.findByIdAndDelete(id);
        if(!paintingDeleted) throw new createError(404, `No Painting matching the id: ${id} was found.`);
        res.json(`Painting with id: ${id} was deleted.`)
    }
    catch(err){
        next(err)
    }
};

