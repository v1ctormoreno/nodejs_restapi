const pool = require('../database');

const Employee = (employee) => {
    this.name = employee.name;
    this.role = employee.role;
    this.salary = employee.salary;
}
Employee.create = (newEmployee, result) => {
    pool.query("INSERT INTO employees SET ?", newEmployee, (err, res) => {
        if(err) {
            console.log('DB ERROR:', err);
            result(err, null);
            return;
        }
    console.log("created employee: ",{id: res.insertID, ...newEmployee} );
    result(null, {id: res.insertID, ...newEmployee});    
    })
};
Employee.findById = (customerId, result) => {
    pool.query(`SELECT * FROM employees WHERE id = ${customerId}`, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, res[0]);
            return;
        }
        if(res.length) {
            console.log('found employee: ', res[0]);
            result(null, res[0]);
            return;            
        }
        result({kind: "not_found"}, null);
    })
}
Employee.getAll = result => {
    pool.query('SELECT * FROM EMPLOYEES', (err, res) => {
        if(err){
            console.log("error:", err);
            result(null, err);
            return;
        }
        console.log("employees: ", res);
        result(null, res);       
    })
}


module.exports = Employee;