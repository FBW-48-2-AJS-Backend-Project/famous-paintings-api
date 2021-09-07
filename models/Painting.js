import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PaintingSchema = new Schema({
    cover: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
})

const Painting = model('Painting', PaintingSchema);
export default Painting;