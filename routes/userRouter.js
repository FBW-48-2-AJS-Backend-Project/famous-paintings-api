import express from 'express';
const router = express.Router();

import {
    createUser, getAllUsers, getOneUser
} from '../controllers/userControllers.js';

router.route('/').post(createUser).get(getAllUsers);
router.route('/:id').get(getOneUser);

export default router;
