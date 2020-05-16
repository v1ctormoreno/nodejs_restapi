const router = require('express').Router();
const pool = require('../database');
const {create, getAll, findById, deleteById, updateById} = require('../controllers/employee.controller');

const {isAuth} = require('../lib/auth');

router.route('/')
    .get(getAll)
    .post(create);
    
router.route('/:id')
    .get(findById)
    .delete(deleteById)
    .put(updateById);

   
module.exports = router;