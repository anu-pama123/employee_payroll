class EmployeePayrollData {
    name;
    salary;
    gender;
    startDate;
    constructor(...params) {
        this.name = params[0];
        this.salary = params[1];
        this.gender = params[2];
        this.startDate = params[4];
    }
    get name() {                                                                                                                                    
    return this._name;
    }
    
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this.name = name;
            else throw "Name is incorrect";    
        }
    toString() {
        const options = { year: 'numeric', month: 'long',  day: 'numeric' };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocalDateString("en-US", options);
        return " name=" + this.name + ", salary=" + this.salary + ", gender=" + this.gender + ", startDate=" + empDate;                           
    }
}

