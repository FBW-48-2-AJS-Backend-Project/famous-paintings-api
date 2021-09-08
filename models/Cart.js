import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const CartSchema = new Schema({
    paintings: Array,
    total: {
        default: 0,
        type: Number
    }
},
{
    timestamps: true
});

const Cart = model('Cart', CartSchema);
export default Cart;