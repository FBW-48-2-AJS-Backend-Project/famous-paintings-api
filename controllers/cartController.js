import Cart from '../models/Cart.js';
import createError from 'http-errors';
import Painting from '../models/Painting.js';

// create cart

export const createCart = async (req, res, next) => {
    try{
        const cartTotal = req.body.paintings.reduce((accumulator, item) => {
            return accumulator + item.price
        }, 0);
        console.log(cartTotal);
        let data = {paintings: req.body, total: cartTotal};
        const cart = await Cart.create(data);
        res.json(cart);
        
    }
    catch(err){
        next(err)
    }
};

// total

export const getCartTotal = async (req, res, next) => {
    try{
        const total = await Cart.find();
        if(!total) throw new createError(404, `Looks like your cart is empty`);
        res.json(total)
    }
    catch(err){
        next(err)
    }
}

// update item

export const updateCart = async (req, res, next) => {
    try{
        const { id } = req.params;
        const newData = req.body;
        const updatedPaintings = await Painting.findByIdAndUpdate(id, newData, {new: true});
        res.json(updatedPaintings)
    }
    catch(err){
        next(err)
    }
}

// delete item

export const deleteCart = async (req, res, next) => {
    try{
        const { id } = req.params;
        const cartDeleted = await Cart.findByIdAndDelete(id);
        if(!cartDeleted) throw new createError(404, `Painting with id: ${id} was not deleted, your total is: ${id.price}. `)
        res.json(`Painting with id: ${id} has been deleted. Your new total is ${Cart.subtotal}`)
    }
    catch(err){
        next(err)
    }
}

