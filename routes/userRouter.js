import express from 'express';
const router = express.Router();

import {
    createUser, deleteUser, getAllUsers, getOneUser, updateUser
} from '../controllers/userControllers.js';

router.route('/').post(createUser).get(getAllUsers);
router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

export default router;
