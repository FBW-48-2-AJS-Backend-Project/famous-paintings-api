import express from 'express';
const router = express.Router();

import {
    createUser, deleteUser, getAllUsers, getOneUser, loginUser, updateUser
} from '../controllers/userControllers.js';

router.route('/').post(createUser).get(getAllUsers);
router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);
router.route('/login').post(loginUser);

export default router;
