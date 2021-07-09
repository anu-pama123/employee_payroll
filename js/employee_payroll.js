class EmployeePayrollData {
    get id() {                                                                                                                                    
        return this._id;
        }    
    set id(id) {
        this._id  = id;
    }

    get name() {                                                                                                                                    
    return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
            else throw "Name is incorrect";    
        }

    get startDate() {                                                                                                                                    
        return this._startDate;
        }    
    set startDate(startDate) {
        this._startDate  = startDate;
    }

    toString() {
        const options = { year: 'numeric', month: 'long',  day: 'numeric' };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocalDateString("en-US", options);
        return "id=" + this.id + " name=" + this.name + this.salary + ", startDate=" + empDate;                           
    }
}
