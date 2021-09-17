import User from "../models/User.js";
import createError from "http-errors";


export const createUser = async (req, res, next) => {
    try {
        let data = req.body;
        const user = await User.create(data);
        res.json(user)
    }
    catch (err){
        next(err)
    }
};

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
        if(!users) throw new createError (404, `Looks like no users are found.`)
    } catch (error) {
        next( error );
    }
};

export const getOneUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById( id );
        if(!user) throw new createError(404, `No user with id --> ${id} was found`);
        res.json( user );
    } catch (error) {
        next( error );
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newData = req.body;
        const user = await User.findByIdAndUpdate(
            id,
            newData,
            { new: true }
        );
        if (!user) throw new createError(404, `No user with id --> ${id} was found`);
        res.json( user );
    } catch (error) {
        next( error );
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete( id );
        if (!user) throw new createError(404, `No user with id --> ${id} was found`);
        res.json({
            success: `user with id:${id} was deleted.`,
            user: user
        });
    } catch (error) {
        next( error );
    }
};

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user) throw new createError(404, `Invalid email`)
        if(user.password !== password) throw new createError(404, `Invalid password`)
        res.send( user );
    } catch (error) {
        next( error );
    }
}