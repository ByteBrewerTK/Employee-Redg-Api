const express = require('express');
const router = express.Router();

const {createUser, deleteUser, updateUser, getAllUsers} = require('../controller/userController');

router.post('/createUser', createUser);
router.delete('/deleteUser/:id', deleteUser);
router.put('/updateUser/:id', updateUser);
router.get('/getAllUsers', getAllUsers);

module.exports = router;