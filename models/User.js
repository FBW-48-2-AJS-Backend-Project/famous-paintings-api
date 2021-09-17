import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    cart: [{ painting: { type: Schema.Types.ObjectId, required: false }, quantity: { type: Number, required: false}
    }]
},
{
    versionKey: false,
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

const User = model("User", UserSchema);

export default User;