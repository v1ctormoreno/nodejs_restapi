const Employee = require("../models/employee.model");
const pool = require('../database');
const employeeCtrl={};

employeeCtrl.create = async (req, res) => {
    try{        
        const {name, role, salary, active} = req.body; //no injections boiis aka destructuring
        const data = await pool.query('INSERT INTO employees SET ?', [{name, role, salary, active}]);
        res.status(200).json({id: data.insertId, ...req.body});
    } catch(err){
        res.status(502).json({message: 'Error interno del servidor.'})
        console.log("error: ", err);
    }
};
employeeCtrl.getAll = async (req, res) => {
    try{
        const data = await pool.query('SELECT * FROM employees');
        res.status(200).json(data);
    } catch (err) {
        res.status(502).json({
            message: 'Error interno del servidor.'
        })
        console.log("error: ", err);
    }
}
employeeCtrl.findById = async (req, res) => {
    try{
        const {id} = req.params;
        const data = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);
        res.status(200).json(data);
    } catch(err){
        console.log(err);
        
    }
}
employeeCtrl.deleteById = async (req, res) => {
    try {
        const {id} = req.params;
        const data = await pool.query('DELETE FROM employees WHERE id = ?', [id]);
        res.status(200).json({message: `El ID: ${id} ha sido eliminado de la base de datos`});
    } catch (err) {
        console.log(err);
        res.status(502).json({message: 'Error interno del servidor.'})
        
    }
}
employeeCtrl.updateById = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, role, salary, active} = req.body;
        const data = await pool.query('UPDATE employees SET name = ?, role = ?, salary = ?, active = ? WHERE id = ?', [name, role, salary, active, id]);
        const changedEmployee = await pool.query('SELECT * FROM employees WHERE ID = ?', [id]);
        const result = [{data}, {changedEmployee}]
        res.status(200).send(result);
    } catch(err) {
        console.log(err);
        res.status(502).json({message: 'Error interno del servidor.'})
    }
}

module.exports = employeeCtrl;