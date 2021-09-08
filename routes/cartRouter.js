import express from 'express';
import Cart from '../models/Cart.js';
const router = express.Router();

import{
    createCart,
    getCartTotal,
    updateCart,
    deleteCart
} from '../controllers/cartController.js';

router.route('/').get(getCartTotal).post(createCart);

router.route('/:id').put(updateCart).delete(deleteCart);

export default router;